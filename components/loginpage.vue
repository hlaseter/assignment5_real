<template>
    <Page>
        <ActionBar title="Login" />
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->
                
                <Label textWrap="true"
                    text="Login:"
                    class="h2 description-label" />
                <TextField id = "username" v-model="user.name" hint="Username"/>

                <TextField v-model="user.password" hint="Password" />
                <Button text="Go!" @tap="login()" />
             
                
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>


    import restaurants from './restaurants'
    import welcome from './welcome'
    export default{
    methods: {
        login(){

            if( this.user.name =='' || this.user.password == ''){
                alert("Please enter username and password");
                return;
            }
            global.username = this.user.name;
            this.$navigateTo(welcome)
            }

        },
    
    data() {
            return {
                user: {
                    name: "",
                    password: "",
                }
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
    TextField{
        background-color:white;
    }
    Button{
        background-color:lightgreen;
    }
</style>