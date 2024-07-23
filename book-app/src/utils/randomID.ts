export const randomID = (textLength: number) : string => {
    console.log(textLength)
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsAmount = characters.length;
    for(let i = 0; i < textLength; i++) {
        id += characters.charAt(Math.floor(Math.random() * charsAmount));
        console.log(id)
    }
    return id;
  }

  