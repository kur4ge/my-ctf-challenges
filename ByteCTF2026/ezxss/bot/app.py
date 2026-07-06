from flask import Flask, request, render_template, redirect, url_for, abort, session, make_response
from urllib.parse import urljoin, quote
from playwright.sync_api import sync_playwright
import base64
import re
import os
import hashlib

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY") or os.urandom(16).hex()
POW_ZEROS = int(os.environ.get("POW_ZEROS", "4"))
USED_POWS = set()


def _build_target_url(req_host: str, req_scheme: str, path: str) -> str:
    if not path:
        abort(400)
    p = path.strip()
    if len(p) > 2048:
        abort(400)
    if re.search(r"[\s\r\n]", p):
        abort(400)
    if not p.startswith("/"):
        p = "/" + p
    base = f"{req_scheme}://{req_host}"
    return urljoin(base, p)


def _new_pow():
    return base64.urlsafe_b64encode(os.urandom(8)).decode().rstrip("=")


@app.get("/bot")
def index():
    chal = _new_pow()
    session["pow_chal"] = chal
    return render_template("index.html", challenge=chal, difficulty=POW_ZEROS)


@app.get("/bot/sandbox")
def sandbox():
    target = request.args.get("target", "/")
    resp = make_response(render_template("sandbox.html", target=target, difficulty=POW_ZEROS))
    resp.headers["X-Frame-Options"] = "deny"
    return resp


@app.post("/bot/visit")
def visit():
    path = request.form.get("path", "")
    ans = request.form.get("pow", "")
    chal = session.get("pow_chal")
    token = f"{chal}:{ans}"
    if not chal:
        return "会话失效，请刷新页面重新获取 challenge", 400
    if not ans:
        return "缺少 PoW 后缀参数", 400
    if token in USED_POWS:
        return "该 PoW 已使用，请刷新页面获取新的 challenge", 409
    h = hashlib.sha256((chal + ans).encode()).hexdigest()
    if not h.startswith("0" * POW_ZEROS):
        return "PoW 校验失败", 400
    USED_POWS.add(token)
    session.pop("pow_chal", None)
    scheme = 'http'
    host = "nginx"
    url = _build_target_url(host, scheme, path)
    url = f"{scheme}://{host}/bot/sandbox?target={quote(url, safe='')}"
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
        context = browser.new_context(viewport={"width": 1280, "height": 900})
        flag = os.environ.get("FLAG", "FLAG{test}")

        context.add_cookies([
            {
                "name": "FLAG",
                "value": flag,
                "url": f"{scheme}://{host}/",
            }
        ])
        page = context.new_page()
        page.goto(url, wait_until="load", timeout=15000)
        page.wait_for_timeout(5000)
        img = page.screenshot(full_page=True)
        context.close()
        browser.close()
    img_b64 = base64.b64encode(img).decode()
    img_b64 = ''
    return render_template("result.html", image_b64=img_b64, target=url, path=path)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
