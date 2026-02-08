This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<!-- Hero -->

@media (max-width: 1024px) {
  .hero {
    margin-left: 40px;
    padding-right: 40px;
  }

  .right {
    width: 520px;
    height: 520px;
    margin-top: 80px;
  }

  .circle {
    width: 360px;
    height: 360px;
  }

  .imgdoc {
    width: 150px;
    right: -14%;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    margin: 0;
    padding: 48px 20px;
    min-height: auto;
  }

  .left {
    width: 100%;
  }

  .content {
    width: 100%;
    height: auto;
  }

  .left h1,
  .left h1 span {
    width: 100%;
    font-size: 36px;
    line-height: 1.2;
  }

  .para {
    width: 100%;
    height: auto;
    font-size: 15px;
    line-height: 24px;
  }

  .actions {
    width: 100%;
    flex-direction: row;
    gap: 20px;
    margin-top: 32px;
  }

  .video {
    margin-left: 0;
  }

  .right {
    width: 100%;
    height: auto;
    margin: 40px 0 0;
    display: flex;
    justify-content: center;
  }

  .circle {
    width: 260px;
    height: 260px;
  }

  .circle img:first-child {
    width: 100%;
    height: auto;
  }

  .imgdoc {
    width: 110px;
    top: 30%;
    right: -8%;
    transform: scale(1);
  }
}

@media (max-width: 480px) {
  .left h1,
  .left h1 span {
    font-size: 30px;
  }

  .actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .circle {
    width: 220px;
    height: 220px;
  }

  .imgdoc {
    width: 95px;
    right: -6%;
  }
}


<!-- Navbar -->

@media (max-width: 1200px) {
  .Navbar {
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
  }

  .menu {
    margin-left: 0;
    width: auto;
  }

  .SearchBox {
    margin-left: auto;
  }
}

@media (max-width: 992px) {
  .Navbar {
    flex-direction: column;
    height: auto;
    gap: 12px;
    padding: 16px;
    align-items: center;
  }

  .menu {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 12px;
  }

  .menu li {
    white-space: nowrap;
  }

  .SearchBox {
    width: 100%;
    margin: 8px 0 0 0;
  }

  .Input {
    width: 100%;
  }

  .searchBtn {
    margin-left: auto;
  }
}

@media (max-width: 600px) {
  .menu {
    row-gap: 10px;
    column-gap: 16px;
  }

  .link,
  .active {
    font-size: 13px;
    letter-spacing: 0.1em;
  }

  .SearchBox {
    height: 42px;
  }
}

<!-- Banner -->

@media (min-width: 1440px) {
  .ContainerLogo {
    margin-left: 120px;
  }

  .info {
    margin-left: 392px;
  }

  .button {
    margin-left: 49px;
    margin-right: 120px;
  }
}

@media (max-width: 1200px) {
  .ContainerLogo {
    margin-left: 40px;
  }

  .info {
    margin-left: auto;
    margin-right: 24px;
    gap: 24px;
  }

  .button {
    margin-left: 24px;
    margin-right: 40px;
  }
}

@media (max-width: 992px) {
  .wrapper {
    flex-wrap: wrap;
    row-gap: 16px;
  }

  .info {
    width: 100%;
    justify-content: center;
    margin-left: 0;
  }

  .button {
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
  }

  .ContainerLogo {
    margin-left: 0;
    justify-content: center;
  }

  .logoText {
    align-items: center;
    text-align: center;
  }

  .info {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  .location,
  .phone {
    justify-content: center;
  }

  .button {
    width: auto;
    margin: 8px 0 0;
  }
}
