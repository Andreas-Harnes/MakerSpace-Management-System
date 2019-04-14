<!-- body -->
 <template>
 <tr>
<!-- search -->
 <template>
  <div id="searching">
    <input type="text" placeholder="Search..." />
  </div>
</template>

<!-- containt -->
 <div id="container">
    <div id="item_element">
      <h2 id="item_title">Drone</h2>
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
        <b-form-checkbox value="item_title">Drone</b-form-checkbox>
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
      <b-form-checkbox-group id="checkbox-group-2" name="flavour-3">
        <b-form-checkbox value="available">Available</b-form-checkbox>
        <br />
        <b-form-checkbox value="unavailable">Unavailable</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
  </div>
  </tr>
</template>
<script>
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Drone', value: 'item_title' },
          { text: '3D-printer', value: '3d-printer' },
          { text: 'Skruer', value: 'skruer' },
        ]
      }
    }
  }
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