from time import sleep
import time
import requests

# telegram bot_id and chat_id
bot_token = ''
chat_id = ''

# 課程內容
# 課程：\n時間：\n教室：\n教授：
course=[[[''],['課程：\n時間：09:20 - 12:10\n教室：\n教授：'],[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],[''],[''],['']]]

#呼叫時間
calltime=[[[7],[50]],[[8],[50]],[[9],[50]],[[10],[50]],[[12],[50]],[[13],[50]],[[14],[50]]]

###don't edit after this line###

def notice(day):
    if day>4:
        return
    while(True):
        localtime = time.localtime(time.time())
        print(localtime)
        for i in range(0,len(calltime),1):
            if localtime.tm_hour==calltime[i][0][0] and localtime.tm_min==calltime[i][1][0] :
                r = requests.get('https://api.telegram.org/bot'+bot_token+'/sendMessage?chat_id='+chat_id+'&text='+str(course[day][i][0]))
                
                sleep(1740) # 執行後，過1740sec 跳出迴圈
        sleep(60)   # 每60sec 偵測一次
        if(localtime.tm_hour>14):
            break

def main():
    localtime = time.localtime(time.time())
    #if localtime.tm_wday !=5 and localtime.tm_wday !=6:
    print(localtime)
    notice(localtime.tm_wday)

main()