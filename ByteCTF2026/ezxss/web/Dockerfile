FROM golang:1.24 AS builder
WORKDIR /app
COPY go.mod go.sum ./
ENV GOPROXY=https://goproxy.io,direct
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o server .

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/server /app/server

EXPOSE 3000
ENTRYPOINT ["/app/server"]