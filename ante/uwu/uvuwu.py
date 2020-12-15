import discord

TOKEN = ''

client = discord.Client()

rolepreset = 0

@client.event
async def on_message(message):
    # we do not want the bot to reply to itself
    if message.author == client.user:
        return
    
    if message.content.startswith(',d '):
        welcomeMessages = []
        clnmsg = message.content.replace(",d ","")
        newmsg = clnmsg+"\n"
        file = open("dictionawy.txt", 'r')
        welcomeMessages = file.readlines()
        file.close()
        for i in range(len(welcomeMessages)):
            if newmsg == welcomeMessages[i]:
                joinstring = "**_" +clnmsg+"_** - "+welcomeMessages[i+1]
                break
            else:
                joinstring = "thats not a wowd in my dictionawy uwu"
        await message.channel.send(joinstring)
    elif message.content.startswith(',c '):
        welcomeMessages = []
        clnmsg = message.content.replace(",c ","")
        newmsg = clnmsg+"\n"
        file = open("dictionawy.txt", 'r')
        welcomeMessages = file.readlines()
        file.close()
        if newmsg in welcomeMessages:
            joinstring = "thats a wowd to me uwu"
        else:
            joinstring = "thats not a wowd in my dictionawy uwu"
        await message.channel.send(joinstring)
    elif message.content.startswith(',b '):
        welcomeMessages = []
        clnmsg = message.content.replace(",b ","")
        newmsg = clnmsg
        file = open("dictionawy.txt", 'r')
        welcomeMessages = file.readlines()
        file.close()
        for i in range(len(welcomeMessages)):
            if welcomeMessages[i].find(newmsg) != -1:
                joinstring = "**_" +clnmsg+"_** - "+welcomeMessages[i-1]
                break
            else:
                joinstring = "thats not a wowd in my dictionawy uwu"
        await message.channel.send(joinstring)
    elif message.content.startswith(',a'):
        joinstring = "diacwitics aww ike >: \nö > oe | ü > ue \nõ > on | ũ > un \nó > \*o* | ô > ~o~ | ò > -o- | ŏ > >o<"
        await message.channel.send(joinstring)
    
@client.event
async def on_ready():
    print('logged in as ' + client.user.name)
    print(client.user.id)
    print('uw uwuwu')
    print('..- ...- ..- .-- ..-')

client.run(TOKEN)