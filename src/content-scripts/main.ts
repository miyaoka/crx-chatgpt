const textParamKey = "text";

const search = () => {
  const params = new URL(location.href).searchParams;

  const text = params.get(textParamKey);
  if (text == null) return;

  const textarea = document.querySelector("textarea");
  const button = document.querySelector<HTMLButtonElement>("textarea + button");
  if (!textarea || !button) return;

  textarea.value = text;
  button.click();
};

// onMount
setTimeout(() => {
  search();
}, 1000);
