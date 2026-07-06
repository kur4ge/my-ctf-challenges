FROM python:3.11-slim
ENV PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    wget gnupg ca-certificates \
    fonts-liberation fonts-unifont fonts-noto-color-emoji fonts-noto-cjk \
    libasound2 libatk-bridge2.0-0 libatk1.0-0 \
    libc6 libdrm2 libgbm1 libglib2.0-0 libnss3 \
    libx11-6 libxcomposite1 libxdamage1 libxext6 libxfixes3 \
    libxkbcommon0 libxrandr2 libxshmfence1 \
    libcups2 libpango-1.0-0 libcairo2 \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install -r requirements.txt && python -m playwright install chromium
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
