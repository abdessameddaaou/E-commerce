<template>
<div>
  <!-- <nav-bar></nav-bar> -->
    <div class="wrapper">
    
    <div class="d-md-flex align-items-md-center">
        <div class="h3">{{produit.nom}}</div>
        <div class="ml-auto d-flex align-items-center views"> <span class="btn text-success"> <span class="fas fa-th px-md-2 px-1"></span><span>Grid view</span> </span> <span class="btn"> <span class="fas fa-list-ul"></span><span class="px-md-2 px-1">List view</span> </span> <span class="green-label px-md-2 px-1">{{filteredList.length}}</span> <span class="text-muted">Article</span> </div>
    </div>
    <div class="d-lg-flex align-items-lg-center pt-2">
        <div class="form-inline d-flex align-items-center my-2 mr-lg-2 radio bg-light border"> <label class="options">Most Popular <input type="radio" value="desc" v-model="sort" name="radio"> <span class="checkmark"></span> </label> <label class="options">Cheapest <input type="radio" value="asc" name="radio" v-model="sort" checked> <span class="checkmark"></span> </label> </div>
        <div class="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2"> <label class="tick">Promo <input type="checkbox" v-model="promotion" value="promo"> <span class="check"></span> </label> <span class="text-success px-2 count"> 328</span> </div>
        <div class="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2"> <label class="tick">Bio <input type="checkbox"> <span class="check"></span> </label> <span class="text-success px-2 count"> 72</span> </div>
        <div class="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2"> <label class="tick">Czech republic <input type="checkbox"> <span class="check"></span> </label> <span class="border px-1 mx-2 mr-3 font-weight-bold count"> 12</span> <select name="country" id="country" class="bg-light">
                <option value="" hidden>Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Uk">UK</option>
            </select> </div>
            <div class="">
                <input type="text" class="form-control" v-model="search" placeholder="Search a product">
            </div>
    </div>
    <div class="d-sm-flex align-items-sm-center pt-2 clear">
        <div class="text-muted filter-label">Applied Filters:</div>
        <div class="green-label font-weight-bold p-0 px-1 mx-sm-1 mx-0 my-sm-0 my-2" @click.prevent="clearFiltre">Effacer filter <span class=" px-1 close">&times;</span> </div>
        <div class="green-label font-weight-bold p-0 px-1 mx-sm-1 mx-0">Selected Filtre <span class=" px-1 close">&times;</span> </div>
    </div>
    <div class="filters"> <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filter<span class="px-1 fas fa-filter"></span></button> </div>
    <div id="mobile-filter">
        <!-- <div class="py-3">
            <h5 class="font-weight-bold">Categories</h5>
            <ul class="list-group">
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> vegetables <span class="badge badge-primary badge-pill">328</span> </li>
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Fruits <span class="badge badge-primary badge-pill">112</span> </li>
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Kitchen Accessories <span class="badge badge-primary badge-pill">32</span> </li>
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Chefs Tips <span class="badge badge-primary badge-pill">48</span> </li>
            </ul>
        </div> -->
       
        <!-- <div class="py-3">
            <h5 class="font-weight-bold">Brands</h5>
            <form class="brand">
                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Royal Fields <input type="checkbox"> <span class="check"></span> </label> </div>
                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Crasmas Fields <input type="checkbox" checked> <span class="check"></span> </label> </div>
                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Vegetarisma Farm <input type="checkbox" checked> <span class="check"></span> </label> </div>
                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Farmar Field Eve <input type="checkbox"> <span class="check"></span> </label> </div>
                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">True Farmar Steve <input type="checkbox"> <span class="check"></span> </label> </div>
            </form>
        </div> -->
        <!-- <div class="py-3">
            <h5 class="font-weight-bold">Rating</h5>
            <form class="rating">
                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <input type="checkbox"> <span class="check"></span> </label> </div>
                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox"> <span class="check"></span> </label> </div>
                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox"> <span class="check"></span> </label> </div>
                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox"> <span class="check"></span> </label> </div>
                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox"> <span class="check"></span> </label> </div>
            </form>
        </div> -->
    </div>
    <div class="content py-md-0 py-3">
        <section id="sidebar">
            <div class="py-3">
                <h5 class="font-weight-bold">Categories</h5>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> vegetables <span class="badge badge-primary badge-pill">328</span> </li>
                    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Fruits <span class="badge badge-primary badge-pill">112</span> </li>
                    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Kitchen Accessories <span class="badge badge-primary badge-pill">32</span> </li>
                    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Chefs Tips <span class="badge badge-primary badge-pill">48</span> </li>
                </ul>
            </div>
            <div class="py-3">
                 <h5 class="font-weight-bold">Prix : {{ range }}</h5>
                <div class="form-inline d-flex align-items-center py-1">
                    <input v-model="range" class="form-range" type="range" max="2000" min="0" step="100">
                </div> 
            </div>
            <div class="py-3">
                <h5 class="font-weight-bold">Filter : </h5>
                <h6 class="text-start my-2">RAM : </h6>
                <form class="brand">
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">4 GO <input value="4" type="radio" v-model="ram"> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">8 GO <input value="8" type="radio" v-model="ram" > <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">12 GO <input value="12" type="radio" v-model="ram" > <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">32 GO <input value="32" type="radio" v-model="ram"> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">64 GO <input value="64" type="radio" v-model="ram"> <span class="check"></span> </label> </div>
                </form>
                 <h6 class="text-start my-2">Stockage : </h6>
                <form class="brand">
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">256 GO <input value="256" type="radio" v-model="stockage"> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">512 GO <input value="512" type="radio" v-model="stockage" > <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">1000 GO <input value="1000" type="radio" v-model="stockage" > <span class="check"></span> </label> </div>
                </form>
                 <h6 class="text-start my-2">Pouces : </h6>
                <form class="brand">
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick"> 5" <input value="5" type="radio" v-model="pouces"> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick"> 10" <input value="10" type="radio" v-model="pouces" > <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick"> 20"<input value="20" type="radio" v-model="pouces" > <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick"> 30"<input value="30" type="radio" v-model="pouces" > <span class="check"></span> </label> </div>
                </form>
            </div>
            <div class="py-3">
                <h5 class="font-weight-bold">Rating :</h5>
                <form class="rating">
                    <div class="form-inline d-flex align-items-center py-2">
                        <label class="tick">
                             <span class="fas fa-star"></span> 
                             <span class="fas fa-star"></span> 
                             <span class="fas fa-star"></span> 
                             <span class="fas fa-star"></span> 
                             <span class="fas fa-star"></span> 
                             <input type="radio" value="5" v-model="rating"> 
                             <span class="check"></span> 
                        </label> </div>
                    <div class="form-inline d-flex align-items-center py-2">
                         <label class="tick"> 
                            <span class="fas fa-star"></span> 
                            <span class="fas fa-star"></span>
                            <span class="fas fa-star"></span> 
                            <span class="fas fa-star"></span> 
                            <span class="far fa-star px-1 text-muted"></span> 
                            <input type="radio" value="4" v-model="rating"> <span class="check"></span> 
                        </label> 
                    </div>
                    <div class="form-inline d-flex align-items-center py-2"> 
                        <label class="tick">
                            <span class="fas fa-star"></span> 
                            <span class="fas fa-star"></span> 
                            <span class="fas fa-star"></span> 
                            <span class="far fa-star px-1 text-muted"></span> 
                            <span class="far fa-star px-1 text-muted"></span> 
                            <input type="radio" value="3" v-model="rating"> 
                            <span class="check"></span> 
                        </label> 
                    </div>
                    <div class="form-inline d-flex align-items-center py-2">
                         <label class="tick">
                             <span class="fas fa-star"></span> 
                             <span class="fas fa-star"></span> 
                             <span class="far fa-star px-1 text-muted"></span> 
                             <span class="far fa-star px-1 text-muted"></span> 
                             <span class="far fa-star px-1 text-muted"></span> 
                             <input type="radio" value="2" v-model="rating"> 
                             <span class="check"></span> 
                        </label> 
                    </div>
                    <div class="form-inline d-flex align-items-center py-2">
                         <label class="tick"> 
                             <span class="fas fa-star"></span> 
                             <span class="far fa-star px-1 text-muted"></span> 
                             <span class="far fa-star px-1 text-muted"></span> 
                             <span class="far fa-star px-1 text-muted"></span> 
                             <span class="far fa-star px-1 text-muted"></span> 
                             <input type="radio" value="1" v-model="rating"> 
                             <span class="check"></span> 
                        </label> 
                    </div>
                </form>
            </div>
        </section> <!-- Products Section -->
        <section id="products">
            <div class="container py-3">
                <div class="row" v-if="filteredList.length>0">
                    <div  class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 mb-4 " v-for="article in filteredList" :key="article._id">
                        
                        <div @click="showArticle(article._id)" class="card d-flex justify-content-center" v-if="article"> 
                            
                            <img class="w-50 rounded-3 mx-5" v-if="article.image" :src="require('../../../../images/'+article.image)">
                            <img class="card-img-top" v-else alt="image Non disponible" >
                            <div class="card-body mt-2">
                                <h6 class="font-weight-bold pt-1">{{article.nom}}</h6>
                                <!-- <div class="text-muted description">{{article.description}}</div> -->
                                <div class="d-flex align-items-center product" >
                                  <div v-for="etoile in article.avis" :key="etoile">
                                    <span class="fas fa-star d-felx justify-content-center"></span> 
                                  </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between pt-3">
                                    <div class="d-flex flex-column ">
                                        <div class="h6 font-weight-bold">{{article.prix}} €</div>
                                        <div class=" rebate text-danger fw-bold">{{ promo(article.promotion,article.prix) }} </div>
                                    </div>
                                    <div>
                                        <div class="btn btn-primary">Acheter</div>
                                        <div class="btn btn-warning mx-1 rounded-5 text-white text-bold">Détails</div>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    <div v-else class="text-danger fw-bolder h-50">
                        Aucun Article disponible
                    </div>
                    </div>
                </div>

                <div v-else class="text-danger fw-bolder h-100">
                    Aucun Article disponible
                </div>
           
            </div>
        </section>
    </div>
</div>
</div>

</template>

<script>
import axios from 'axios'
// import NavBar from '../../components/NavBar.vue'
export default {
  data () {
    return {
      produit : {},
      search : '',
      range :'',
      rating : "",
      sort :"",
      promotion :"",
      ram : "",
      stockage : "",
      pouces : "",
    }
  },
  // components :{
  //   NavBar
  // },
    name : "produit-front",
   
    methods :{
    getProducts(){
         axios.get(`http://localhost:3500/responsable/produit/voirProduit/${this.$route.params.id}`).then((res)=>{
                console.log(res.data)
                this.produit = res.data[0]
                
            })
      },
 
    promo(promo){
        if(promo>1){
            return "Économiser : "+promo+"%"
        }
         else{
             return ""
         }
    },
    showArticle(id){
          this.$router.push({name:'article-front',params: {id :id}});
    },
    clearFiltre(){
        this.promotion = "",
        this.ram = "",
        this.stockage = "",
        this.pouces = "",
        this.range = '',
        this.rating = ""   
    },
    },
    
    created(){
       axios.get(`http://localhost:3500/responsable/produit/voirProduit/${this.$route.params.id}`).then((res)=>{
                console.log(res.data)
                this.produit = res.data[0]
                
            })
    },
  
    computed : {
   
    filteredList(){
            
            if(this.search){
                return this.produit.article.filter((item)=>{
                    return this.search.toLowerCase().split(' ').every(v => item.nom.toLowerCase().includes(v))
                })
            }
            if(this.range){
                return this.produit.article.filter(item => (item.prix<=this.range && item.prix>0))
            }
            if(this.rating){
                return this.produit.article.filter(item=>item.avis == this.rating)
            }
            if(this.promotion){
                return this.produit.article.filter(item=> item.promotion > 0)
            }
            if(this.ram){
                return this.produit.article.filter(item=> item.ram == this.ram)
            }
            if(this.stockage){
                if(this.stockage == 1000){
                    return this.produit.article.filter(item=> item.stockage == this.stockage)
                }
                if(this.stockage == 512){
                    return this.produit.article.filter(item=> item.stockage > 256 &&  item.stockage == 512)
                }
                if(this.stockage == 256){
                    return this.produit.article.filter(item=> item.stockage <= 256)
                }
                // return this.produit.article.filter(item=> item.stockage <= this.stockage)
            }
            if(this.pouces){
                return this.produit.article.filter(item=> item.pouces == this.pouces)
            }
            // if(this.sort){
            //         return this.produit.article.sort((a,b)=>{
            //             if(this.sort === "desc"){
            //                 parseFloat(a.prix) - parseFloat(b.prix)
            //             }
                    
            //         })
            // }
            // if(this.sort == "desc"){
            //         return this.produit.article.sort((a,b)=>parseFloat(b.prix) - parseFloat(a.prix))
            // }
            
            else{
                return this.produit.article
            }
            
         }
    },
    

}
</script>

<style scoped>


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif
}

.wrapper {
    padding: 30px;
    max-width: 1800px;
    margin: auto
}

.h3 {
    font-weight: 900
}

.views {
    font-size: 0.85rem
}

.btn {
    color: #666;
    font-size: 0.85rem
}

.btn:hover {
    color: #61b15a
}

.green-label {
    background-color: #defadb;
    color: #48b83e;
    border-radius: 5px;
    font-size: 0.8rem;
    margin: 0 3px
}

.radio,
.checkbox {
    padding: 6px 10px
}

.border {
    border-radius: 12px
}

.options {
    position: relative;
    padding-left: 25px
}

.radio label,
.checkbox label {
    display: block;
    font-size: 14px;
    cursor: pointer;
    margin: 0
}

.options input {
    opacity: 0
}

.checkmark {
    position: absolute;
    top: 0px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 50%
}

.options input:checked~.checkmark:after {
    display: block
}

.options .checkmark:after {
    content: "";
    width: 9px;
    height: 9px;
    display: block;
    background: white;
    position: absolute;
    top: 52%;
    left: 51%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 300ms ease-in-out 0s
}

.options input[type="radio"]:checked~.checkmark {
    background: #61b15a;
    transition: 300ms ease-in-out 0s
}

.options input[type="radio"]:checked~.checkmark:after {
    transform: translate(-50%, -50%) scale(1)
}

.count {
    font-size: 0.8rem
}

label {
    cursor: pointer
}

.tick {
    display: block;
    position: relative;
    padding-left: 23px;
    cursor: pointer;
    font-size: 0.8rem;
    margin: 0
}

.tick input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0
}

.check {
    position: absolute;
    top: 1px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 3px
}

.tick:hover input~.check {
    background-color: #f3f3f3
}

.tick input:checked~.check {
    background-color: #61b15a
}

.check:after {
    content: "";
    position: absolute;
    display: none
}

.tick input:checked~.check:after {
    display: block;
    transform: rotate(45deg) scale(1)
}

.tick .check:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg) scale(2)
}

#country {
    font-size: 0.8rem;
    border: none;
    border-left: 1px solid #ccc;
    padding: 0px 10px;
    outline: none;
    font-weight: 900
}

.close {
    font-size: 1.2rem
}

div.text-muted {
    font-size: 0.85rem
}

#sidebar {
    width: 25%;
    float: left
}

.category {
    font-size: 0.9rem;
    cursor: pointer
}

.list-group-item {
    border: none;
    padding: 0.3rem 0.4rem 0.3rem 0rem
}

.badge-primary {
    background-color: #defadb;
    color: #48b83e
}

.brand .check {
    background-color: #fff;
    top: 3px;
    border: 1px solid #666
}

.brand .tick {
    font-size: 1rem;
    padding-left: 25px
}

.rating .check {
    background-color: #fff;
    border: 1px solid #666;
    top: 0
}

.rating .tick {
    font-size: 0.9rem;
    padding-left: 25px
}

.rating .fas.fa-star {
    color: #ffbb00;
    padding: 0px 3px
}

.brand .tick:hover input~.check,
.rating .tick:hover input~.check {
    background-color: #f9f9f9
}

.brand .tick input:checked~.check,
.rating .tick input:checked~.check {
    background-color: #61b15a
}

#products {
    width: 75%;
    padding-left: 30px;
    margin: 0;
    float: right
}

.card:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
    cursor: pointer
}

.card-body {
    padding: 0.5rem
}

.card-body .description {
    font-size: 0.78rem;
    padding-bottom: 8px
}

div.h6,
h6 {
    margin: 0
}

.product .fa-star {
    font-size: 0.9rem
}

.rebate {
    font-size: 0.9rem
}

.btn.btn-primary {
    background-color: #48b83e;
    color: #fff;
    border: 1px solid #008000;
    border-radius: 10px;
    font-weight: 800
}
.btn.btn-warning {
   
    color: #fff;
    border: 1px solid;
    border-radius: 10px;
    font-weight: 800
}

.btn.btn-primary:hover {
    background-color: #48b83ee8
}

img {
    width: 192px;
    height: 132px;
    object-fit: contain
}

.clear {
    clear: both
}

.btn.btn-success {
    visibility: hidden
}

@media(min-width:992px) {

    .filter,
    #mobile-filter {
        display: none
    }
}

@media(min-width:768px) and (max-width:991px) {

    .radio,
    .checkbox {
        padding: 6px 10px;
        width: 49%;
        float: left;
        margin: 5px 5px 5px 0px
    }

    .filter,
    #mobile-filter {
        display: none
    }
}

@media(min-width:576px) and (max-width:767px) {
    #sidebar {
        width: 35%
    }

    #products {
        width: 65%
    }

    .filter,
    #mobile-filter {
        display: none
    }

    .h3+.ml-auto {
        margin: 0
    }
}

@media(max-width:575px) {
    .wrapper {
        padding: 10px
    }

    .h3 {
        font-size: 1.3rem
    }

    #sidebar {
        display: none
    }

    #products {
        width: 100%;
        float: none
    }

    #products {
        padding: 0
    }

    .clear {
        float: left;
        width: 80%
    }

    .btn.btn-success {
        visibility: visible;
        margin: 10px 0px;
        color: #fff;
        padding: 0.2rem 0.1rem;
        width: 20%
    }

    .green-label {
        width: 50%
    }

    .btn.text-success {
        padding: 0
    }

    .content,
    #mobile-filter {
        clear: both
    }
}
</style>