export interface Route{
  name:string;
  price:number;
}

export interface Location{
  id:number;
  name:string;
  routes:Route[];
}

const locationData: Location[] = [
    {
      "id": 1,
      "name": "Nairobi",
      "routes": [
        {
          "name": "CBD",
          "price": 100
        },
        {
          "name": "Serena/Uhuru Park",
          "price": 200
        },
        {
          "name": "Kilimani/Milimani rd",
          "price": 250
        },
        {
          "name": "Upperhill",
          "price": 300
        },
        {
          "name": "Kenyatta Hospital",
          "price": 300
        },
        {
          "name": "D.O.D",
          "price": 300
        },
        {
          "name": "StateHouse",
          "price": 300
        },
        {
          "name": "Yaya Centre",
          "price": 300
        },
        {
          "name": "Kileleshwa",
          "price": 350
        },
        {
          "name": "Lavington",
          "price": 400
        }
      ]
    },
    {
      "id": 2,
      "name": "Industrial Area",
      "routes": [
        {
          "name": "Baricho/Bunyala Road",
          "price": 300
        },
        {
          "name": "G.K Shimo La Tewa",
          "price": 300
        },
        {
          "name": "D.T Dobie",
          "price": 300
        },
        {
          "name": "Likoni/Lungalunga",
          "price": 350
        },
        {
          "name": "Kampala Road",
          "price": 300
        }
      ]
    },
    {
      "id": 3,
      "name": "Waiyaki Way",
      "routes": [
        {
          "name": "Chiromo/Museum",
          "price": 300
        },
        {
          "name": "Riverside",
          "price": 300
        },
        {
          "name": "Westlands/Safaricom",
          "price": 350
        },
        {
          "name": "ABC",
          "price": 350
        },
        {
          "name": "Deloitte",
          "price": 400
        },
        {
          "name": "Kangemi",
          "price": 450
        }
      ]
    },
    {
      "id": 4,
      "name":"Lang'ata Road",
      "routes":[
        {
          "name":"Madaraka",
          "price":300
        },
        {
          "name":"Highrise",
          "price":300
        },
        {
          "name":"Mbagathi",
          "price":300
        },
        {
          "name":"Wilson",
          "price":400
        },
        {
          "name":"Canivore",
          "price":350
        },
        {
          "name":"Uhuru Gardens",
          "price":350
        },
        {
          "name":"Deliverance Church",
          "price":350
        },
        {
          "name":"Otiende",
          "price":350
        },
        {
          "name":"St. Marys",
          "price":350
        },
        {
          "name":"Langata Prison",
          "price":350
        },
        {
          "name":"Galleria Bomas",
          "price":500
        },
        {
          "name":"Karen",
          "price":700
        },
        {
          "name":"Bogani Road",
          "price":700
        }
      ]
    },
    {
      "id":5,
      "name":"Juja Road",
      "routes":[
        {
          "name":"Ngara",
          "price":250
        },
        {
          "name":"Pangani",
          "price":350
        },
        {
          "name":"Eastleigh",
          "price":350
        },
        {
          "name":"Mlango",
          "price":450
        },
        {
          "name":"Mathare",
          "price":450
        },
        {
          "name":"Baba Ndogo",
          "price":450
        },
        {
          "name":"Lucky Summer",
          "price":600
        },
        {
          "name":"Ruaraka",
          "price":400
        },
        {
          "name":"Huruma/Raunda",
          "price":500
        },
        {
          "name":"Light Industries",
          "price":500
        },
        {
          "name":"Kariobangi",
          "price":500
        }
      ]
    },
    {
      "id":6,
      "name":"Thika Road",
      "routes":[
        {
          "name":"Muthaiga/Survey",
          "price":300
        },
        {
          "name":"Allsops",
          "price":350
        },
        {
          "name":"Garden Estate",
          "price":400
        },
        {
          "name":"Roasters",
          "price":400
        },
        {
          "name":"Safaripark",
          "price":400
        },
        {
          "name":"USIU/TRM",
          "price":400
        },
        {
          "name":"Roysambu/Kasarani",
          "price":400
        },
        {
          "name":"Seasons",
          "price":500
        },
        {
          "name":"Mathare",
          "price":400
        },
        {
          "name":"Baba Ndogo",
          "price":400
        },
        {
          "name":"Lucky Summer",
          "price":600
        },
        {
          "name":"Mwiki",
          "price":600
        },
        {
          "name":"Githurai 45/Wendani",
          "price":500
        },
        {
          "name":"Kahawa Sukari/KU",
          "price":500
        },
        {
          "name":"Githurai 44",
          "price":500
        },
        {
          "name":"ClayWorks",
          "price":600
        },
        {
          "name":"Kamakis",
          "price":700
        },
        {
          "name":"Ruiru Ndani",
          "price":700
        },
        {
          "name":"Kimbo",
          "price":700
        },
        {
          "name":"Juja",
          "price":900
        },
        {
          "name":"Thika Town",
          "price":1300
        }
      ]
    },
    {
      "id":7,
      "name":"Naivasha Road",
      "routes":[
        {
          "name":"Riruta",
          "price":500
        },
        {
          "name":"Kawangware/Satelite",
          "price":400
        },
        {
          "name":"ILRI",
          "price":600
        },
        {
          "name":"Dagoretti",
          "price":700
        },
        {
          "name":"DCI Headquarters",
          "price":300
        },
        {
          "name":"Ridgeways",
          "price":400
        },
        {
          "name":"Fourways",
          "price":450
        },
        {
          "name":"Thindigwa",
          "price":450
        },
        {
          "name":"Kiambu Town",
          "price":650
        }
      ]
    },
    {
      "id":8,
      "name":"Mombasa Road",
      "routes":[
        {
          "name":"Nyayo Stadium",
          "price":300
        },
        {
          "name":"South C",
          "price":350
        },
        {
          "name":"South B/Nextgen",
          "price":350
        },
        {
          "name":"Standard Group",
          "price":350
        },
        {
          "name":"GM",
          "price":400
        },
        {
          "name":"Imara Daima",
          "price":400
        },
        {
          "name":"City Cabanas",
          "price":450
        },
        {
          "name":"Transami",
          "price":450
        },
        {
          "name":"JKIA Gate",
          "price":450
        },
        {
          "name":"JKIA Inside",
          "price":450
        },
        {
          "name":"Gateway Mall",
          "price":600
        },
        {
          "name":"Syokimau",
          "price":600
        },
        {
          "name":"Katani",
          "price":700
        },
        {
          "name":"Mlolongo",
          "price":800
        },
        {
          "name":"Athi River/Kitengela",
          "price":900
        },
        {
          "name":"KItengela Town",
          "price":1000
        },
        {
          "name":"Green Park",
          "price":1200
        }
      ]
    },
    {
      "id":9,
      "name":"Limuru Road",
      "routes":[
        {
          "name":"Parklands",
          "price":300
        },
        {
          "name":"Gigiri",
          "price":400
        },
        {
          "name":"Village Market",
          "price":450
        },
        {
          "name":"UNEP",
          "price":400
        },
        {
          "name":"Runda",
          "price":500
        },
        {
          "name":"Ruaka Town",
          "price":500
        },
        {
          "name":"Ndenderu",
          "price":700
        },
        {
          "name":"Muchatha",
          "price":800
        },
        {
          "name":"Banana",
          "price":900
        },
        {
          "name":"Limuru",
          "price":1200
        }
      ]
    },
    {
      "id":10,
      "name":"Magadi Road",
      "routes":[
        {
          "name":"Brook House",
          "price":500
        },
        {
          "name":"Rongai",
          "price":800
        },
        {
          "name":"Nazarene",
          "price":900
        },
        {
          "name":"Kiserian",
          "price":1300
        }
      ]
    },
    {
      "id":11,
      "name":"Ngong Road",
      "routes":[
        {
          "name":"Prestige",
          "price":300
        },
        {
          "name":"Junction",
          "price":400
        },
        {
          "name":"Riara Rd",
          "price":400
        },
        {
          "name":"Jamhuri Estate",
          "price":400
        },
        {
          "name":"Lenana School",
          "price":500
        },
        {
          "name":"Dagoretti",
          "price":600
        },
        {
          "name":"Karen Shopping Centre",
          "price":600
        },
        {
          "name":"BulBul",
          "price":800
        },
        {
          "name":"Ngong Town",
          "price":1200
        }
      ]
    },
    {
      "id":12,
      "name":"Jogoo Road",
      "routes":[
        {
          "name":"Gikomba Kamukunji",
          "price":250
        },
        {
          "name":"City Stadium/Majengo",
          "price":300
        },
        {
          "name":"Madaraka/Hamza",
          "price":300
        },
        {
          "name":"Jericho",
          "price":300
        },
        {
          "name":"BuruBuru",
          "price":400
        },
        {
          "name":"Caltex/Donholm",
          "price":400
        },
        {
          "name":"Greenspan",
          "price":400
        },
        {
          "name":"Umoja 4.2",
          "price":400
        },
        {
          "name":"Innercore",
          "price":400
        },
        {
          "name":"Komarock",
          "price":500
        },
        {
          "name":"Mama Lucy",
          "price":500
        },
        {
          "name":"Fedha",
          "price":450
        },
        {
          "name":"Nyayo/Pipeline",
          "price":400
        },
        {
          "name":"Nyayo Gate D",
          "price":450
        },
        {
          "name":"Embakasi",
          "price":500
        },
        {
          "name":"Utawala",
          "price":700
        },
        {
          "name":"Saika/Junction",
          "price":500
        },
        {
          "name":"Njiru",
          "price":700
        },
        {
          "name":"Ruai",
          "price":700
        },
        {
          "name":"Kamulu/Joska",
          "price":1000
        },
        {
          "name":"Malaa",
          "price":1300
        }
      ]
    },
    {
      "id":13,
      "name":"Peponi Way",
      "routes":[
        {
          "name":"Spring Valley",
          "price":400
        },
        {
          "name":"Kitisuru",
          "price":500
        },
        {
          "name":"Loresho",
          "price":500
        },
        {
          "name":"Nyari",
          "price":450
        },
        {
          "name":"UON/Lower Kabete",
          "price":500
        },
        {
          "name":"Wangige",
          "price":700
        }
      ]
    }
]

export default locationData;
