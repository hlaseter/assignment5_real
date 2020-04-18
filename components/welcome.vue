<template>
    <Page @loaded="onPageLoaded">
        <ActionBar title="Home" />
        <ScrollView>
            <StackLayout class="home-panel">
             

            


                    <text-field :text=test></text-field>
                <Button text="Restaurants near me!" @tap="restaurants()" />
                
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>

    import loginpage from './loginpage'
    import restaurants from './restaurants'

    export default {
        methods: {
            
            restaurants(){
           
                this.$navigateTo(restaurants)
            },
            logout(){
          
                this.$navigateTo(loginpage)

            },
            onPageLoaded(){
                

                this.username = global.username
            }
        },
      

        data() {
            return {
               test: "Welcome, " +  global.username + '!'
            };
        },
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
    text-field{
        background-color:lightblue;
        font-size: 15px;
        font-weight: bold;
    }
    Button{
        background-color:lightgreen;
        color: black;
    }
</style>