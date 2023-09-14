const storeItems = [
    {
        chocalateImg: './chocolate images/chocolate-1.jpg',
        chocalatePrice: '230',
        chocalateName: "dairy milk",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-2.jpg',
        chocalatePrice: '329',
        chocalateName: "New chocolate",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-3.jpg',
        chocalatePrice: '223',
        chocalateName: "Nuts and choco",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-4.jpg',
        chocalatePrice: '240',
        chocalateName: "Sunfest chocolate",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-5.jpg',
        chocalatePrice: '130',
        chocalateName: "Dark chocolate",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-6.jpg',
        chocalatePrice: '360',
        chocalateName: "Milk chocolate",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-7.jpg',
        chocalatePrice: '209',
        chocalateName: "Dark me0lody",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-8.jpg',
        chocalatePrice: '279',
        chocalateName: "WHite meolody",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-9.jpg',
        chocalatePrice: '349',
        chocalateName: "Natural dark",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-10.jpg',
        chocalatePrice: '129',
        chocalateName: "Natural milk",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-11.jpg',
        chocalatePrice: '284',
        chocalateName: "cocosa solids",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-12.jpg',
        chocalatePrice: '189',
        chocalateName: "Banking chocolate",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-13.jpg',
        chocalatePrice: '60',
        chocalateName: "Cadbury",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-14.jpg',
        chocalatePrice: '230',
        chocalateName: "Flake chocolate",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-15.jpg',
        chocalatePrice: '435',
        chocalateName: "Crispy crunch",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-16.jpg',
        chocalatePrice: '125',
        chocalateName: "crunchie",
        chocolateDes: "new chocalte in the store"
    }, {
        chocalateImg: './chocolate images/chocolate-17.jpg',
        chocalatePrice: '305',
        chocalateName: "Sweet marie",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-18.jpg',
        chocalatePrice: '206',
        chocalateName: "mini eggs",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-19.jpg',
        chocalatePrice: '80',
        chocalateName: "Caramilk",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-20.jpg',
        chocalatePrice: '169',
        chocalateName: "Dairy Milk silk",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-21.jpg',
        chocalatePrice: '129',
        chocalateName: "Maynards",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-22.jpg',
        chocalatePrice: '368',
        chocalateName: "Daily milk & coke",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-23.jpg',
        chocalatePrice: '70',
        chocalateName: "halls",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-24.jpg',
        chocalatePrice: '230',
        chocalateName: "Stimoral",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-29.jpg',
        chocalatePrice: '350',
        chocalateName: "Dirol",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-30.jpg',
        chocalatePrice: '230',
        chocalateName: "Stimoral",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-25.jpg',
        chocalatePrice: '350',
        chocalateName: "Dirol",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-26.jpg',
        chocalatePrice: '230',
        chocalateName: "Stimoral",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-27.jpg',
        chocalatePrice: '350',
        chocalateName: "Dirol",
        chocolateDes: "new chocalte in the store"
    },
    {
        chocalateImg: './chocolate images/chocolate-28.jpg',
        chocalatePrice: '350',
        chocalateName: "Dirol",
        chocolateDes: "new chocalte in the store"
    }

]

let arr = []


storeItems.forEach((item) => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div');
    itemDiv.style.height = "230px";
    itemDiv.style.width = "170px";
    itemDiv.style.background = "rgb(239, 239, 239)";


    let image = document.createElement('img')
    image.classList.add('image')
    image.style.height = "40%"
    image.style.width = "90%"
    image.style.borderRadius = '5px'
    image.src = item.chocalateImg


    let chocalateName = document.createElement('h3')
    chocalateName.classList.add('chocolate-name')
    chocalateName.innerText = item.chocalateName
    chocalateName.style.margin = '7px 0px'

   
    


    let chocalatePrice = document.createElement('h2')
    chocalatePrice.classList.add('chocolate-price')
    chocalatePrice.style.width ="100%"
    chocalatePrice.innerText = 'Rs.';
    chocalatePrice.style.margin = '7px 0px'
    chocalatePrice.style.display ='flex'
    chocalatePrice.style.justifyContent ='center'
    chocalatePrice.style.alignItems = 'center'


    let rs = document.createElement('h4')
    rs.innerText = `${item.chocalatePrice}`;
    chocalatePrice.append(rs)

    

    let AddCartBtn = document.createElement('button')
    AddCartBtn.classList.add('add-cart-btn')
    AddCartBtn.style.margin = '7px 0px'
    AddCartBtn.innerText = "Add to cart"


    AddCartBtn.addEventListener('click', (e) => {

        // console.log(e)
        // console.log(e.target.parentNode.childNodes[1].innerText)
        // console.log(e.target.parentNode.childNodes[2].lastElementChild.innerText)

        let sum = 0;
        let obj = {
            id: arr.length + 1,
            chocalateName: e.target.parentNode.childNodes[1].innerText,
            chocalatePrice: e.target.parentNode.childNodes[2].lastElementChild.innerText,
        }
        // console.log(obj)
        arr.push(obj);

        // console.log(arr)

        document.querySelector('.total-cart-items').innerHTML = '';

        // console.log(arr.length)

        if (arr.length <= 8) {
            arr.forEach((item) => {
                // console.log(item)
                let eachCartItem = document.createElement('div');
                eachCartItem.classList.add("each-cart-item");
                eachCartItem.style.width = '90%';

                let sNo = document.createElement('h3')
                sNo.classList.add('s-no')
                sNo.innerText = item.id;


                let eachItemName = document.createElement('h3')
                eachItemName.classList.add("each-item-name");
                eachItemName.innerText = item.chocalateName;

                let eachItemPrice = document.createElement('h3')
                eachItemPrice.classList.add('each-item-price')
                eachItemPrice.innerText = `Rs. ${item.chocalatePrice}`;

                
                eachCartItem.append(sNo)
                eachCartItem.append(eachItemName)
                eachCartItem.append(eachItemPrice)
                document.querySelector('.total-cart-items').append(eachCartItem)

            })
            updateAmount()
            
        }
        else if (arr.length == 9) {
            alert('Items cannot added more than 8.')
            arr.length = 0;
        }
        
       

    })

    
    itemDiv.append(image)
    itemDiv.append(chocalateName)
    itemDiv.append(chocalatePrice)
    itemDiv.append(AddCartBtn)
    document.querySelector('.store-items').append(itemDiv)
    
})

let totalAmount = 0; 


function updateAmount() {
    totalAmount = 0; 
    for (let i = 0; i < arr.length; i++) {
        // totalAmount += parseFloat();
        totalAmount += JSON.parse(arr[i].chocalatePrice)
    }
    console.log(totalAmount)
    let totalPriceSpan = document.getElementById('totalPrice');
    totalPriceSpan.innerText = totalAmount.toFixed(2)
}



// 