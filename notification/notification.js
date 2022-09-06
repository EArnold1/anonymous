import OneSignal from 'react-onesignal';

const runNotification = async (username) => {
    // await OneSignal.init({ appId: process.env.NEXT_PUBLIC_NOTIFICATION_KEY, allowLocalhostAsSecureOrigin: true });
    await OneSignal.init({ appId: process.env.NEXT_PUBLIC_NOTIFICATION_KEY });
    console.log(process.env.NEXT_PUBLIC_NOTIFICATION_KEY)

    await OneSignal.showSlidedownPrompt();

    await OneSignal.setExternalUserId(username);
}

export default runNotification;