

<!-- body -->
 <template>
 <tr>
<!-- search -->
 <template>
    <div id="searching">
  <input type="text" v-model="search" placeholder="Search..." /> 
    </div> 
  </template> 

<!-- containt -->
 <div id="container">
    <div id="item_element">
      <h2 id="item_title">Element navn</h2>
      <img id="content_img" src="smiley.gif" alt="bilde" height="42" width="42">
      <p id="description">Beskrivelse av element her</p>
      <p id="status">Status</p>
  <b-button id="favorit_button">Favorit</b-button>
    </div>
  </div>
<!-- category -->
<div id="category">
    <b-form-group label="Category">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
        <b-form-checkbox value="drone">Drone</b-form-checkbox>
        <br />
        <b-form-checkbox value="3d-printer">3D-printer</b-form-checkbox>
         <br />
        <b-form-checkbox value="skruer">Skruer</b-form-checkbox>
      </b-form-checkbox-group>
        </b-form-group> 
  </div>
  <!-- availability -->
  <div id="availability">
    <b-form-group label="Availability">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-3">
        <b-form-checkbox value="available">Available</b-form-checkbox>
        <br />
        <b-form-checkbox value="unavailable">Unavailable</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group> 
  </div>
  </tr>
 </template>
 
<script>

</script>

<style lang="sass" scoped>

</style>