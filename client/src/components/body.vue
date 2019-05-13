<!-- body -->
 <template>
<!-- search -->
 <!-- <template>
  <div id="searching">
    <input type="text" placeholder="Search..." />
  </div>
</template> -->

<!-- containt -->
 <table class="table table-bordered">
   <thead>
     <tr>
       <th>ID</th>
       <th>Name</th>
       <th>Description</th>
       <th>Image</th>
       <th>Category ID</th>
       <th>Total</th>
       <th>Available</th>
     </tr>
   </thead>

   <tr v-for="item in jsonData" v-bind:key='item.id'>
				<td v-for="innerJSON in item" v-bind:key="innerJSON.id">{{innerJSON}}</td>
	 </tr>

 </table>  
<!-- category -->
<!-- <div id="category">
    <b-form-group label="Category">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
        <b-form-checkbox value="item_title">Drone</b-form-checkbox>
        <br />
        <b-form-checkbox value="3d-printer">3D-printer</b-form-checkbox>
        <br />
        <b-form-checkbox value="skruer">Skruer</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
  </div> -->
  <!-- availability -->
  <!-- <div id="availability">
    <b-form-group label="Availability">
      <b-form-checkbox-group id="checkbox-group-2" name="flavour-3">
        <b-form-checkbox value="available">Available</b-form-checkbox>
        <br />
        <b-form-checkbox value="unavailable">Unavailable</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
  </div>
  </tr> -->
</template>
<script>
import axios from 'axios';

function getItems() {
  axios.get('http://mms.hiof.no:3000/cumulativeitems')
        .then(function (response) {
          // handle success
          console.log(response);
          return response.data.cumulativeItems;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          console.log('done');
        });
}


  export default {
    name: 'body',
    data() {
      return {
        jsonData:[ {
            "id": 1,
            "name": "Wata K20",
            "description": "Underwater drone",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP0bs6R7ss0uljAAIqW3mCH4ViTEJNwGOx3ndqc9L4yJh-R0I",
            "categoryId": 1,
            "items": 6,
            "availableItems": 5
        },
        {
            "id": 2,
            "name": "Aireal XV60",
            "description": "Such fast, very speed, much wow",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP0bs6R7ss0uljAAIqW3mCH4ViTEJNwGOx3ndqc9L4yJh-R0I",
            "categoryId": 1,
            "items": 1,
            "availableItems": 1
        },
        {
            "id": 3,
            "name": "Glax2K",
            "description": "VR glasses",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP0bs6R7ss0uljAAIqW3mCH4ViTEJNwGOx3ndqc9L4yJh-R0I",
            "categoryId": 2,
            "items": 5,
            "availableItems": 2
        },
        {
            "id": 4,
            "name": "SeeVR",
            "description": "Virtual reality glasses",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP0bs6R7ss0uljAAIqW3mCH4ViTEJNwGOx3ndqc9L4yJh-R0I",
            "categoryId": 2,
            "items": 0,
            "availableItems": 0
        },
        {
            "id": 5,
            "name": "Windows 10",
            "description": "Home computer for everyone",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP0bs6R7ss0uljAAIqW3mCH4ViTEJNwGOx3ndqc9L4yJh-R0I",
            "categoryId": 3,
            "items": 12,
            "availableItems": 7
        },
        {
            "id": 6,
            "name": "Ubuntu",
            "description": "Home computer for Linux-Users",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP0bs6R7ss0uljAAIqW3mCH4ViTEJNwGOx3ndqc9L4yJh-R0I",
            "categoryId": 3,
            "items": 4,
            "availableItems": 3
        },
        {
            "id": 7,
            "name": "Arch Linux",
            "description": "DIY Computer",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP0bs6R7ss0uljAAIqW3mCH4ViTEJNwGOx3ndqc9L4yJh-R0I",
            "categoryId": 3,
            "items": 5,
            "availableItems": 1
        },
        {
            "id": 8,
            "name": "Mac",
            "description": "It's fast, it's expensive, it's very expensive",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP0bs6R7ss0uljAAIqW3mCH4ViTEJNwGOx3ndqc9L4yJh-R0I",
            "categoryId": 3,
            "items": 7,
            "availableItems": 7
        }]
      }
    },
    methods:{
      setJSON: () => {
        axios.get('http://mms.hiof.no:3000/cumulativeitems')
        .then(function (response) {
          // handle success
          console.log(response);
          this.jsonData = response.data.cumulativeItems;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          console.log('done');
        });
      }
    },
    mounted(){
      // this.setJSON()
      
    }
  }

  // jsonData = getItems();
  console.log('hello there');
</script>
<style>
/* Search */
#searching {
  position: relative;
  float: left;
  height: 100%;
  width: 100%;
  top: 2em;
  right: 26em;
}

/* checkbox */

#category {
  position: relative;
  float: left;
  text-align: left;
  top: 9em;
  right: 37.8em;
}

/* availability */
#availability {
  position: relative;
  float: left;
  text-align: left;
  top: 3em;
  right: 44.7em;
}

.manger-nav a{
  position: relative;
  margin-right: 15px;
  color: #2c3e50;
  float: left;
}

/* container */
#container {
  position: relative;
  float: left;
  height: 25em;
  width: 38em;
  top: 0em;
  left: 20em;
  border-style: solid;
}
/* For earch element */
#item_element {
  position: relative;
  border-style: solid;
  height: 10em;
}

#content_img {
  position: relative;
  float: left;
  right: 7em;
  top: 2em;
}

#item_title {
  font-size: 20px;
  position: relative;
  float: left;
  left: 6em;
  top: 1em;
}

#description {
  position: relative;
  float: left;
  top: 5em;
  right: 4em;
}

#status {
  position: relative;
  float: left;
  top: 3em;
  right: 15.9em;
}

#favorit_button {
  position: relative;
  float: left;
  top: 1em;
  left: 7em;
}
</style>