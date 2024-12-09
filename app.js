const menuItems = [
    {
        Name: 'Chicken Biryani',
        Desc: 'Aromatic spiced rice with tender chicken pieces.',
        price: 120,
        type: 'lunch',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekPdghS6zCCDQp7uRRXKH8k_wA8OrZDTT7w&s'
    },
    {
        Name: 'Paneer Tikka',
        Desc: 'Marinated paneer cubes grilled to perfection.',
        price: 150,
        type: 'lunch',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KvpJ4PH8mtEltqlG206RyiyyXTrD8jEtlg&s'
    },
    {
        Name: 'Butter Chicken',
        Desc: 'Delicious chicken in a creamy tomato-based gravy.',
        price: 180,
        type: 'lunch',
        img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/butter-chicken-recipe.jpg'
    },
    {
        Name: 'Veg Fried Rice',
        Desc: 'Stir-fried rice with mixed vegetables.',
        price: 100,
        type: 'lunch',
        img: 'https://media.istockphoto.com/id/1292617507/photo/tasty-veg-schezwan-fried-rice-served-in-bowl-over-a-rustic-wooden-background-indian-cuisine.jpg?s=612x612&w=0&k=20&c=MlfiFWbcPDUj2wnjtxoHBxSUrRrKb9c1OR8rS9H4goc='
    },
    {
        Name: 'Mutton Curry',
        Desc: 'Tender mutton cooked in rich gravy.',
        price: 220,
        type: 'lunch',
        img: 'https://t4.ftcdn.net/jpg/05/32/19/77/360_F_532197714_A3iAnfwDeau6jYVbDa1g6ZB2y5w0443z.jpg'
    },
    {
        Name: 'Aloo Gobi',
        Desc: 'A spicy and flavorful potato and cauliflower curry.',
        price: 80,
        type: 'lunch',
        img: 'https://media.istockphoto.com/id/1096057548/photo/aloo-gobi-cauliflower-potato-curry.jpg?s=612x612&w=0&k=20&c=FHnOLRLfBn0zQDHsy_gutmT0iXa4D0g5vg1uxJnc_40='
    },
    {
        Name: 'Pasta Primavera',
        Desc: 'Pasta with fresh vegetables and creamy sauce.',
        price: 130,
        type: 'lunch',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4c_1q9aGHc3_xcQfaLLuokE1Dgy1ffiAQw&s'
    },
    {
        Name: 'Chicken Caesar Salad',
        Desc: 'Grilled chicken with romaine lettuce and Caesar dressing.',
        price: 160,
        type: 'lunch',
        img: 'https://prettydeliciouseats.com/wp-content/uploads/2021/03/Cajun-Air-Fryer-Crispy-Chicken-Caesar-Salad-45-scaled.jpg'
    },
    {
        Name: 'Cheese Sandwich',
        Desc: 'A simple yet delicious grilled cheese sandwich.',
        price: 70,
        type: 'lunch',
        img: 'https://cravinghomecooked.com/wp-content/uploads/2023/07/grilled-cheese-1-13.jpg'
    },
    {
        Name: 'Chicken Shawarma',
        Desc: 'Spicy chicken wrapped in flatbread with sauces.',
        price: 150,
        type: 'lunch',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIAfLqeImOPh_UFUGIZhcptAlYetBx9_djw&s'
    },
    {
        Name: 'Chocolate Milkshake',
        Desc: 'Creamy milkshake made with rich chocolate.',
        price: 90,
        type: 'milkshake',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3DH3NcVO-kkrhmWrQNVJQM-FPRY25vs9Yg&s'
    },
    {
        Name: 'Strawberry Milkshake',
        Desc: 'A sweet milkshake made with fresh strawberries.',
        price: 95,
        type: 'milkshake',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRqVl1RS6Duz3X42X6bN_sIwcB3DkpJ2bMQ&s'
    },
    {
        Name: 'Vanilla Milkshake',
        Desc: 'Classic milkshake with a vanilla flavor.',
        price: 80,
        type: 'milkshake',
        img: 'https://images.mrcook.app/recipe-image/clo6zsazd000008mk6golhupe'
    },
    {
        Name: 'Mango Milkshake',
        Desc: 'A tropical milkshake made with fresh mangoes.',
        price: 100,
        type: 'milkshake',
        img: 'https://i.ytimg.com/vi/gllA8QgRJIA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCflcWwuz6fObY8mw8Eh5VB-14Hlg'
    },
    {
        Name: 'Banana Milkshake',
        Desc: 'Smooth milkshake made with ripe bananas.',
        price: 85,
        type: 'milkshake',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnB50kqSnAE_qrJqsQpOGwui2j9uttbgPbhAGpSeyakJA9A4oV7_2B-Rp1moes2FhOdw&usqp=CAU'
    },
    {
        Name: 'Pancakes with Syrup',
        Desc: 'Fluffy pancakes served with warm maple syrup.',
        price: 150,
        type: 'breakfast',
        img: 'https://gladkokken.imgix.net/DSC_0229-3.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fm=jpg&fp-x=0.5&fp-y=0.5&h=1000&q=60&w=1800&s=1f7d0d2030c0e048969aa4a538f69b0c'
    },
    {
        Name: 'Scrambled Eggs with Toast',
        Desc: 'Soft scrambled eggs served with buttered toast.',
        price: 100,
        type: 'breakfast',
        img: 'https://myairfryerkitchen.com/wp-content/uploads/2022/10/air-fryer-bacon-scrambled-eggs-26-e1665279536766.jpg'
    },
    {
        Name: 'Avocado Toast',
        Desc: 'Mashed avocado spread over toasted bread with a sprinkle of salt and pepper.',
        price: 120,
        type: 'breakfast',
        img: 'https://www.allrecipes.com/thmb/8NccFzsaq0_OZPDKmf7Yee-aG78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg'
    },
    {
        Name: 'Halwa Puri',
        Desc: 'Sweet semolina halwa served with fluffy puris.',
        price: 180,
        type: 'breakfast',
        img: 'https://images.deliveryhero.io/image/fd-pk/LH/qhdg-listing.jpg'
    },
    {
        Name: 'Chai Paratha',
        Desc: 'Crispy paratha served with a cup of spiced chai.',
        price: 130,
        type: 'breakfast',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6aNu5Lfv2-mc1O9K42UFP23NsqYOyyid6DpaHmEfpQI9kjTDJACUPVMrSnjO3jiSvVs&usqp=CAU'
    }
];


let menuBody = document.querySelector('.menuBody');



function filter(menuType) {

    let filterItems = []
    menuBody.innerHTML = '';
    filterItems = menuItems.filter(function (element) {
        return menuType === 'All' ? element.type : element.type === menuType

    });

    filterItems.forEach(function (element) {

        menuBody.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4 cardImg">
                <img src="${element.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${element.Name}</h5>
                    <p class="card-text">${element.Desc}</p>
                    <p class="card-text"><small class="text-body-secondary">Rs.${element.price}</small></p>
                </div>
            </div>
        </div>`

    })
}

filter('All');
