# strava-outside
A chrome extension that will allow you to suppress a variety of indoor activities on [Strava](https://www.strava.com).

`strava-outside` quietly sits in your [Chrome](http://chrome.google.com) browser and waits for you to open up your Strava feed.
When you do, it quickly filters out all your friends' indoor activities (from the sources you select), and leaves you with a nice,
clean, and adventure-filled feed. Of course, the indoor activities that _you_ did are _much_ more exciting than any of the ones
your friends did, so `strava-outside` would never filter out yours.

## Installation
To install `strava-outside`, you'll need to load it into your browser in
[unpacked mode](https://developer.chrome.com/extensions/getstarted#unpacked) as follows:

1. Download a released version of the extension from the [releases](releases) page.
1. Unzip the extension in a directory of your choice (it's now your "unpacked" extension).
1. Visit `chrome://extensions` (via omnibox or menu -> Tools -> Extensions).
1. Enable Developer mode by ticking the checkbox in the upper-right corner.
1. Click on the "Load unpacked extension..." button.
1. Select the directory containing your unpacked `strava-outside` extension.

## Configuration
By default, the extension will suppress indoor activities from sources like Zwift, Sufferfest, etc.
To configure the suppressed sources, simply click the extension's icon, and uncheck any activity sources you'd like to continue
to receive in your feed.

## FAQ
Q. Is this extension safe? Will it steal my data?
A. It is most definitely safe! I wrote this extension because there was already too much data. Why would I want yours?
  If you are unconvinced, please review the source code. It's very small, and there's nowhere for anything nefarious to hide.

Q. Why is this extension so difficult to install?
A. This is the first time I ever attempted to write anything like this. From the time I thought to do it to now is approximately
  24 hours. I just still have a lot to learn in order to make it a bit easier. But thanks for your patience!
