export async function handleSave() {
  const buffer = await (await fetch("/testAudio.wav")).blob();

  const file = new File([buffer], 'image.wav', { type: 'image/png' })

  const data  = new FormData();
  data.append('imageFile', buffer);

  const response = await fetch(`/api/handle`, {
    body: data,
    method: 'POST',
  });
  if (response.ok) {
    console.log("owkay");
  }
};
