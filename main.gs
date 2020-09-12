function doPost(e){
  var estringa = JSON.parse(e.postData.contents);
  var payload = identificar(estringa);
  var data = {
    "method": "post",
    "payload": payload
  }

  UrlFetchApp.fetch("https://api.telegram.org/botToken/", data);
  // Token記得更換
}


function identificar(e){
    if(e.message.text.indexOf("/start") === 0){      
    var mensaje = {
      "method": "sendMessage",
      "chat_id": String(e.message.chat.id),
      "text": "😀 \n你好，此機器人將於上課前半小時傳送課程訊息至頻道通知。\n\n👇Channel\nURL of your channel\n\n💬 Commands\n/help - 功能\n/course - 課表\n/school - 學校網站",
    }
  }
  
  if(e.message.text.indexOf("/help") === 0){      
    var mensaje = {
      "method": "sendMessage",
      "chat_id": String(e.message.chat.id),
      "text": "😀 \n你好，此機器人將於上課前半小時傳送課程訊息至頻道通知。\n\n👇Channel\nURL of your channel\n\n💬 Commands\n/help - 功能\n/course - 課表\n/school - 學校網站",
    }
  }

  
  if(e.message.text.indexOf("/course") === 0){      
    var mensaje = {
      "method": "sendPhoto",
      "chat_id": String(e.message.chat.id),
      "photo": "url of your class schedule photo",
    }  
  }
  
    if(e.message.text.indexOf("/school") === 0){      
    var mensaje = {
      "method": "sendMessage",
      "chat_id": String(e.message.chat.id),
      "text": "url of your school website",
    }
  }
  
  console.log(String(e.message.chat.id))
  return mensaje
}

// https://api.telegram.org/botToken/setWebhook?url=Current web app URL
// Token記得更換，部屬為網頁應用程式後，Copy Current web app URL, 貼上上方URL，並前往該URL以啟用Webhook!
//=========================================================================================================================