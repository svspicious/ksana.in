# [ksana.in](https://ksana.in)

<img src="public/images/orange/ksana.png" height="80"/>

✂️ Layanan pemendek tautan yang mudah, gratis & tanpa iklan

## Features

- Login/Register with Google
- Simple hit count to see the number of visits
- Share link using Native Share (for mobile web)
- Copy link using Clipboard API

## Screenshots

|               Desktop               |              Mobile               |
| :---------------------------------: | :-------------------------------: |
| ![Desktop](screenshots/desktop.png) | ![Mobile](screenshots/mobile.png) |

## Installation

Copy file `.env.local.example` to `.env.local` and change value with your own supabase url and anonymous key.
You can get it after register and create your own project on Supabase.io.

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Create table `urls` on Supabase

Go to the SQL tab and execute this query on the editor.

```sql
create table urls (
  id bigint generated by default as identity primary key,
  user_id uuid references auth.users not null,
  real_url text check (char_length(real_url) > 3),
  slug text check (char_length(slug) > 3),
  hit integer default 0,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

## Credits

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.io/)
- [Chakra-UI](https://chakra-ui.com/docs/getting-started)
- [SWR](https://swr.vercel.app/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Oge](https://oge.vercel.app/)
- Illustrations by [manypixels.co](https://www.manypixels.co/gallery)

## Support me

- 👉 🇮🇩 [Trakteer](https://trakteer.id/mazipan/tip?utm_source=github)
- 👉 🌍 [BuyMeACoffe](https://www.buymeacoffee.com/mazipan?utm_source=github)
- 👉 🌍 [Paypal](https://www.paypal.me/mazipan?utm_source=github)
- 👉 🌍 [Ko-Fi](https://ko-fi.com/mazipan)

---

Copyright ©️ 2021 by Irfan Maulana
