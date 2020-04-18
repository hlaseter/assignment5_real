<template>
    <Page @loaded="getMyRestaurants">
        <ActionBar title="Restaurants" />
        <ScrollView>
            <StackLayout class="home-panel">
                           <TextField v-model="searchValue" :text="textFieldValue3"
                    hint="Search by keyword..." @returnPress = "getMyRestaurants"/>

                
                <Label textWrap="true"
                    text="Here's my restaurants page! Here are the ten nearest restaurants!"
                    class="h3 description-label" />
      
                <text-field :text=one></text-field>
                <text-field :text=two></text-field>
                <text-field :text=three></text-field>
                <text-field :text=four></text-field>
                <text-field :text=five></text-field>
                <text-field :text=six></text-field>
                <text-field :text=seven></text-field>
                <text-field :text=eight></text-field>
                <text-field :text=nine></text-field>
                <text-field :text=ten></text-field>
                
                <Button text="Log out" @tap="logout()" />
                <Button text="Return to homepage" @tap="home()" />
  
  



            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>




    import loginpage from './loginpage'
    import welcome from './welcome'
    const http = require("tns-core-modules/http");
    const Geolocation = require("nativescript-geolocation");

    import{
        Accuracy
    } from "tns-core-modules/ui/enums";
    export default {
        methods: {
            logout(){
          
                this.$navigateTo(loginpage)
            },
            home(){
          
                this.$navigateTo(welcome)
            },

            getMyLocation() {
                Geolocation.enableLocationRequest();
                Geolocation.getCurrentLocation({
                    desiredAccuracy: Accuracy.high,
                    updateDistance: 0.1,
                    timeout: 20000
                }).then(
                    loc => {
                        if (loc) {
 
                            
                        }
                    },
                    function(e) {
                        console.log("Error: " + e.message);
                    }
                );
            },

            getMyRestaurants() {
                var i;
                for (i = 0; i < 10; i++) { 
                    this.populate("Loading... ", i);
                }
                
                
                Geolocation.enableLocationRequest();
                Geolocation.getCurrentLocation({
                    desiredAccuracy: Accuracy.high,
                    updateDistance: 0.1,
                    timeout: 20000
                }).then(
                    loc => {
                        if (loc) {
                            
                            const key = "AIzaSyCcyhQSj2xof_bO8Pps_BIUL9yLVnFGTD0";
                            let searchstring = this.searchValue;
                            const request = "nearbysearch";
                            const output = "json";
                            let parameters = '';
                 
                            if(searchstring == '' || searchstring == undefined){
                                
                                parameters = `location=${loc.latitude},${loc.longitude}&radius=1500&type=restaurant`;
                                
                            } else{
                                parameters = `location=${loc.latitude},${loc.longitude}&radius=1500&type=restaurant&keyword=${searchstring}`;
                            }

        
                            const url = `https://maps.googleapis.com/maps/api/place/${request}/${output}?${parameters}&key=${key}`;
  
                            
		                    http.request({
                                url: url,
                                method: "GET"
                            }).then(this.parseResponse);
                            
                        }
                    },
                    function(e) {
                        console.log("Error: " + e.message);
                    },
                    
                    
                );
            },
        
            parseResponse(response){
              
               
          
                const data = response.content.toJSON();
                var i;
                for (i = 0; i < 10; i++) { 
                    this.populate("", i);
                }
                


                data.results.forEach((restaurant, index) => {
                    this.populate(restaurant.name, index);

                    
         
                   
                    
                    
                   
                 

                });
              
            },

            populate(restaurant, i){
                
                if(i==0){
                    this.one = restaurant;
                    return;
                }
                if(i==1){
                    this.two = restaurant;
                    return;
                }
                if(i==2){
                    this.three = restaurant;
                    return;
                }
                if(i==3){
                    this.four = restaurant;
                    return;
                }
                if(i==4){
                    this.five = restaurant;
                    return;
                }
                if(i==5){
                    this.six = restaurant;
                    return;
                }
                if(i==6){
                    this.seven = restaurant;
                    return;
                }
                if(i==7){
                    this.eight = restaurant;
                    return;
                }
                if(i==8){
                    this.nine = restaurant;
                    return;
                }
                if(i==9){
                    this.ten = restaurant;
                    return;
                }


            }
        },
        data() {
            return {
                one: '',
                two:'',
                three:'',
                four:'',
                five:'',
                six:'',
                seven:'',
                eight:'',
                nine:'',
                ten:'',
                textFieldValue3: ''


            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
        Page{
        background-color:lightblue;
        ;
    }
    TextField{
        background-color:white;
    }
    Button{
        background-color:lightgreen;
        color: black;
    }
</style>