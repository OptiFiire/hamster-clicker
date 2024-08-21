# 🔐 Getting your account token
1. Open up a telegram on your web browser and Hamster Kombat bot, press play.
2. It must give you error `You can play only on mobile`, here is the part where magic comes in!
3. Open your Developer tools, press `Select element` button on top of dev. tools and hover over that mini web app. It must show you `iframe` tag.
4. Inside `src` attribute find a parameter `tgWebAppPlatform=weba` and change it to `tgWebAppPlatform=android`. AND BOOOM! Your account is hacked! Okay jokes aside let's move on.
5. Now you will get access to Hamster Kombat game on website/pc, after that navigate to `Network` tab in developer tools.
6. Click on hamster ONCE, and there will pop up a new request named `tap`, click on it, copy it's header `Authorization`. Save it somewhere, it will be useful later.

# 🧭 Setting up
1. First you will need to download all the packages, to do that run command `npm i`.
2. This NodeJS application needs access to your Hamster Kombat account so we will use authorization key we got from earlier. So create a new file named `.env`.
3. Paste there `AUTH="<KEY_YOU_GOT_EARLIER>"`, it will look like this `AUTH="Bearer 1712.....M8vT"`
4. Run command `node .` and enjoy your coins.

# 🤔 Purpose
I was planning to keep this code secret, but decided to share my creation with other fella developers. I saved up so much time, just chilling while I get my free coins without doing anything. I would recommend using a free hosting like [PylexNodes](https://pylexnodes.net/) or [SillyDev](https://sillydevelopment.co.uk/) to keep this application online so it would run even when your pc is turned off.

# ⭐ Don't forget to star this project :D
