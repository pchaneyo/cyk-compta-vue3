import { ref } from 'vue';

export function useRecaptcha(siteKey: string) {
  const token = ref<string | null>(null);

  const executeRecaptcha = () => {
    return new Promise<string>((resolve, reject) => {
      if (window.grecaptcha) {
        window.grecaptcha.enterprise.ready(() => {
          window.grecaptcha.enterprise.execute(siteKey, { action: 'submit' }).then((recaptchaToken: string) => {
            token.value = recaptchaToken;
            resolve(recaptchaToken);
          }).catch((error: any) => {
            reject(error);
          });
        });
      } else {
        reject('reCAPTCHA not loaded');
      }
    });
  };

  return {
    token,
    executeRecaptcha,
  };
}
