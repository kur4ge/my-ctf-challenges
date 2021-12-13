#!/usr/bin/python3
import socketserver
import random
import signal
import string
import sys
from hashlib import sha256
from selenium import webdriver

from base64 import b64encode
import time
def visit_article(uuid):
    print('uuid:', uuid, file=sys.stderr, flush=True)
    chrome_options = webdriver.ChromeOptions()

    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--disable-gpu')
    chrome_options.add_argument('--ignore-certificate-errors')
    chrome_options.add_argument('--no-sandbox')

    client = webdriver.Chrome(executable_path='/usr/bin/chromedriver', options=chrome_options)
    # client.execute_script("window.alert = function() {};")
    client.get("https://aginx/")
    time.sleep(3)
    client.switch_to.alert.accept()
    client.switch_to.alert.accept()

    client.find_element_by_css_selector('a[href="#/login"]').click()
    time.sleep(3)
    form = client.find_elements_by_css_selector('input')
    form[0].send_keys('admin')
    form[1].send_keys('The_Passw0rd_y0u_w1lI_n3ver_kn0w!!!_9f3253946623')
    client.find_element_by_css_selector('button[type="submit"]').click()
    time.sleep(3)
    client.switch_to.alert.accept()

    client.execute_script("location.href='/#/articles/' + atob(`{}`)".format(b64encode(uuid.encode('utf8')).decode('utf8')))
    time.sleep(25)
    print(client.current_url, file=sys.stderr, flush=True)
    print(client.page_source, file=sys.stderr, flush=True)
    client.quit()

class Task(socketserver.BaseRequestHandler):
    def proof_of_work(self):
        proof = ''.join([random.choice(string.ascii_letters+string.digits) for _ in range(20)])
        digest = sha256(proof.encode('latin-1')).hexdigest()
        self.request.send(str.encode("sha256(XXXX+%s) == %s\n" % (proof[4:],digest)))
        self.request.send(str.encode('Give me XXXX:'))
        x = self.request.recv(10).decode()
        x = x.strip()
        xx = x+proof[4:]
        if len(x) != 4 or sha256(xx.encode('latin-1')).hexdigest() != digest:
            return False
        return True

    def handle(self):
        signal.alarm(600) # in case you want to use those SLOW python generator
        if not self.proof_of_work():
            return
        signal.alarm(100)
        self.request.sendall(b"Give me article id :\n")
        uuid = self.request.recv(0x1000).strip().decode('latin-1')
        self.request.sendall(b"The admin will check it out right away.\n")
        self.request.close()
        visit_article(uuid)

class ForkedServer(socketserver.ForkingTCPServer, socketserver.TCPServer):
    pass

if __name__ == "__main__":
    HOST, PORT = '0.0.0.0', 9000
    print(HOST, PORT, file=sys.stderr, flush=True)
    server = ForkedServer((HOST, PORT), Task)
    server.allow_reuse_address = True
    server.serve_forever()

# wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# sudo dpkg -i google-chrome-stable_current_amd64.deb
# sudo apt install -y
# wget http://chromedriver.storage.googleapis.com//chromedriver_linux64.zip
