# HTTP2 Demo

HTTP/2 Protocol Demo. 📡

## Prerequisites

- Node.js >= v10.x (Recomendded latest version)
- [Generate the certificate and key](#generate-the-certificate-and-key)

## Generate the certificate and key

> Need to install [openssl](https://www.openssl.org/)

To generate the certificate and key for this example, run:

```
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem
```

## Install

```
npm install
```

## Start

```
npm start
```

## Checklist

- [ ] Server Push
- [ ] Performace differences from HTTP/1 sprite images
