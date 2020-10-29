const informacoesCard = [
    {
        nameUser: "Matheus Oliveira",
        namePop: "Batman",
        reference: 84,
        imageUser: "https://w7.pngwing.com/pngs/192/205/png-transparent-dragonball-characters-illustration-goku-vegeta-t-shirt-gohan-dragon-ball-dragon-ball-z-manga-computer-wallpaper-fictional-character.png",
        imageMain: "https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/462223/Batman_%2528Dawn_of_Justice%2529_Vinyl_Art_Toys_8d833543-2d7e-4d77-8e69-a445dc9dd90d.jpg",
        imageInterest: ["https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/463432/Beerus_Vinyl_Art_Toys_24894d25-7d79-4661-a8bf-ea4d7a2640c2.jpg", "https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/729108/Goku_%2528Windy%2529_Vinyl_Art_Toys_72790eed-8465-4398-9343-c2c03a8e50e1_large.jpg", "https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/780619/The_Child_Vinyl_Art_Toys_30fdde78-61dc-4ecc-ba06-4536d9897dad_large.JPG"]
    },
    {
        nameUser: "Matheus Oliveira",
        namePop: "Batman",
        reference: 84,
        imageUser: "https://w7.pngwing.com/pngs/192/205/png-transparent-dragonball-characters-illustration-goku-vegeta-t-shirt-gohan-dragon-ball-dragon-ball-z-manga-computer-wallpaper-fictional-character.png",
        imageMain: "https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/462223/Batman_%2528Dawn_of_Justice%2529_Vinyl_Art_Toys_8d833543-2d7e-4d77-8e69-a445dc9dd90d.jpg",
        imageInterest: ["https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/463432/Beerus_Vinyl_Art_Toys_24894d25-7d79-4661-a8bf-ea4d7a2640c2.jpg", "https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/729108/Goku_%2528Windy%2529_Vinyl_Art_Toys_72790eed-8465-4398-9343-c2c03a8e50e1_large.jpg", "https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/780619/The_Child_Vinyl_Art_Toys_30fdde78-61dc-4ecc-ba06-4536d9897dad_large.JPG"]
    }
    
]



const corpoCard = document.querySelector("[data-conteudo-card]");

const exibeCard = (imageMain, namePop, reference, imageUser, nameUser, imageInterest) => {
    return `
<div class="col-lg-3 col-md-4 col-sm-6 col-12"> 
<div class="card exposure">
<figure class="img-wrap">
    <img src="${imageMain}" class="card-img-top" alt="...">
</figure>
<figcaption class="info-title-item">
    <a href="..." class="title-item">
    ${namePop} ${reference}

    </a>

</figcaption>
<figcaption class="info-wrap border-user">
    <img class="icon img-xs"
        src="${imageUser}">
    <a href="..." class="text-muted"> ${nameUser} </a>
</figcaption>
<div class="interest">
    <h5 class="bar-int">
        INTERESSES
    </h5>
</div>
<div class="info-interest">
    <figure class="wish-1">
        <img src="${imageInterest[0]}" class="img-wish">
    </figure>
    <figure class="wish-2">
        <img src="${imageInterest[1]}" class="img-wish">
    </figure>
    <figure class="wish-3">
        <a href="..." class="aling-interest">
            <img src="${imageInterest[2]}" class="img-wish-3">

            <i class="fa fa-plus" aria-hidden="true"></i>
        </a>
    </figure>

</div>
</div>
</div>
`

}

let elementString = '';

informacoesCard.forEach(pop => {
    elementString = elementString + exibeCard(pop.imageMain, pop.namePop, pop.reference, pop.imageUser, pop.nameUser, pop.imageInterest);
});

corpoCard.innerHTML = elementString;

