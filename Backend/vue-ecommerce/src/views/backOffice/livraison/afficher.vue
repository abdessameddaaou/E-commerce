<template>
  <div class="row mt-5">
     <div class="col-md-5 mx-5">
       <div class="card bg-light rounded-5">
                   <table class="table table-striped table-hover table-borderless">
                    <tbody >
                        <tr>        
                            <td class="h-100">
                                <strong>
                                    <span class="glyphicon glyphicon-asterisk text-primary"></span>
                                   Nom                                               
                                </strong>
                            </td>
                            <td class="text-primary">
                                {{article.nom}}
                            </td>
                        </tr>
                        <tr>    
                            <td>
                                <strong>
                                    <span class="glyphicon glyphicon-user  text-primary"></span>    
                                    Produit                                                
                                </strong>
                            </td>
                            <td class="text-primary">
                                {{article.produit.nom}}
                            </td>
                        </tr>
                        <tr>        
                            <td>
                                <strong>
                                    <span class="glyphicon glyphicon-cloud text-primary"></span>  
                                    Prix                                                
                                </strong>
                            </td>
                            <td class="text-primary">
                                {{article.prix}} €
                            </td>
                        </tr>

                        <tr>        
                            <td>
                                <strong>
                                    <span class="glyphicon glyphicon-bookmark text-primary"></span> 
                                    Quantité                                                
                                </strong>
                            </td>
                            <td class="text-primary">
                                {{article.quantite == 0 ? 'Rupture' : article.quantite}}
                            </td>
                        </tr>


                        <tr>        
                            <td>
                                <strong>
                                    <span class="glyphicon glyphicon-eye-open text-primary"></span> 
                                    Notation                                                
                                </strong>
                            </td>
                            <td class="text-primary">
                                {{article.avis}}
                            </td>
                        </tr>
                        <tr>        
                            <td>
                                <strong>
                                    <span class="glyphicon glyphicon-envelope text-primary"></span> 
                                    Nombres des commandes                                                
                                </strong>
                            </td>
                            <td class="text-primary">
                                -
                            </td>
                        </tr>
                                                     
                    </tbody>
                </table>
       </div>
     </div>
     <div class="col-md-5">
        <img class="w-50 rounded float-right" :src="require(`../../../../../images/${article.image}`)" :alt="article.image" />
     </div>

     <div class="col-md-10 mx-auto">
       <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a class="nav-link " @click.prevent="setActive('home')" :class="{ active: isActive('home') }" >Descirption</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('profile')" :class="{ active: isActive('profile') }" >Technique</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('contact')" :class="{ active: isActive('contact') }" >Reviews</a>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div class="tab-pane fade " :class="{ 'active show': isActive('home') }" id="home">
        <h4 class="text-secondary">{{article.description}}</h4>
      </div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('profile') }" id="profile">Description technique </div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('contact') }" id="contact">Commentaire</div>
    </div>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            article :{},
            activeItem : 'description'
        }
    },
    name : "afficher-livraison",
    methods: {
       
        getArticle(){
            axios.get(`http://localhost:3500/responsable/article/voirarticle/${this.$route.params.id}`).then((res)=>{
             this.article = res.data
        })
       
      },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },

    },
   
    created(){
        this.getArticle();
    }
}
</script>

<style>

</style>