<template>
  <div>
    <span>{{connected}}</span>
    <button @click="connect">
      Connect
    </button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      connected: false,
    
    };
  },
  methods :{
    connect(){
      FB.login(result => {
        console.log(result);
      });
    },
  },
  mounted(){
    FB.init({
      appId: 1648562638569064,
      version: 'v2.12',
    });
    FB.getLoginStatus(result =>{
        if(result.status === 'connected'){
          this.connected = ture;
        }
    });
  },
};
</script>