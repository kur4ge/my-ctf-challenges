FROM debian:bookworm-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN sed -i 's/deb.debian.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list.d/debian.sources

RUN apt-get update && apt-get install -y \
    git \
    build-essential \
    ca-certificates \
    libpcre3 \
    libpcre3-dev \
    zlib1g \
    zlib1g-dev \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/local/src
RUN git clone --branch release-1.29.8 --depth 1 https://github.com/nginx/nginx.git

WORKDIR /usr/local/src/nginx

RUN ./auto/configure \
    --prefix=/etc/nginx \
    --sbin-path=/usr/sbin/nginx \
    --conf-path=/etc/nginx/nginx.conf \
    && make -j$(nproc) \
    && make install

RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/cache/nginx/static \
    && chown -R www-data:www-data /var/cache/nginx


ADD nginx.conf /etc/nginx/nginx.conf

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
