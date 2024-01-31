const { createApp } = Vue

createApp({
  data() {
    return {
        contacts: [
            {
            name: 'Michele',
            avatar: './assets/img/avatar_1.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: './assets/img/avatar_2.jpg',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: './assets/img/avatar_3.jpg',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: './assets/img/avatar_4.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: './assets/img/avatar_5.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: './assets/img/avatar_6.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Federico',
            avatar: './assets/img/avatar_7.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Davide',
            avatar: './assets/img/avatar_8.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
            ],
            }
            ],
            contatto: 0,
            testoMessaggio: "",
            ricercaNome: "",

    }
  },
  methods: {
    lastMessage(index){
        let arrLength = this.contacts[index].messages.length;
        return this.contacts[index].messages[arrLength - 1].message
    },
    lastSeen(index){
        let arrLength = this.contacts[index].messages.length;
        let data = this.contacts[index].messages[arrLength - 1].date
        data = data.split(" ").pop();
        return data = data.substr(0, data.lastIndexOf(":"));
    },
    onlyHdate(index,contatto){
        let data = this.contacts[contatto].messages[index].date
        data = data.split(" ").pop();
        return data = data.substr(0, data.lastIndexOf(":"));
    },
    oraAttuale(){
        const currentDate = new Date();
        const hours = String(currentDate.getHours()).padStart(2, "0");
        const minutes = String(currentDate.getMinutes()).padStart(2, "0");
        const orario = `${hours}`+":" +`${minutes}`
        return orario;
    },
    statusCheck(index,contatto){
      if(this.contacts[contatto].messages[index].status === 'received'){
        return true
      } else {
        return false
      }
    },
    replyMsg(contatto){
      setTimeout(() => { 
        const currentDate = new Date();
        let anno = currentDate.getFullYear();
        let mese = currentDate.getMonth() + 1;
        let giorno = currentDate.getDay();
        const hours = String(currentDate.getHours()).padStart(2, "0");
        const minutes = String(currentDate.getMinutes()).padStart(2, "0");
        const mills = String(currentDate.getMilliseconds()).padStart(2, "0");
        const orario = `${hours}`+":"+`${minutes}`+":"+`${mills}`
        let GMA = `${giorno}`+"/"+`${mese}`+"/"+`${anno}`;
        const dataCompleta = `${GMA}`+" "+`${orario}`;
        this.contacts[contatto].messages.push({date: `${dataCompleta}`, message: "Ok!", status: 'received'})
        }, 1000);
        
    },
    inviaMessaggio(contatto,testoMessaggio){
      if(testoMessaggio !== ""){
        const currentDate = new Date();
        let anno = currentDate.getFullYear();
        let mese = currentDate.getMonth() + 1;
        let giorno = currentDate.getDay();
        const hours = String(currentDate.getHours()).padStart(2, "0");
        const minutes = String(currentDate.getMinutes()).padStart(2, "0");
        const mills = String(currentDate.getMilliseconds()).padStart(2, "0");
        const orario = `${hours}`+":"+`${minutes}`+":"+`${mills}`
        let GMA = `${giorno}`+"/"+`${mese}`+"/"+`${anno}`;
        const dataCompleta = `${GMA}`+" "+`${orario}`;
        this.contacts[contatto].messages.push({date: `${dataCompleta}`, message: `${testoMessaggio}`, status: 'sent'})
        this.testoMessaggio = ""
        console.log(this.contacts[contatto].messages)
      }
    },
    ricercaUtente(index,ricercaNome){
      const arrayNomiCheck = []
      const nomeLow = (this.contacts[index].name.toLowerCase())
      const nomeUpp = (this.contacts[index].name.toUpperCase())
      arrayNomiCheck.push(nomeLow, nomeUpp)
      const lowName = arrayNomiCheck.filter(str => str.includes(ricercaNome))
      console.log(lowName)
      if(this.contacts[index].name.includes(lowName)){
        return false
      }
    }
    
  },
}).mount('#app')