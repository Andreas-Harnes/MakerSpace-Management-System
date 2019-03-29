
  
<template>
<tr>
    <b-container fluid>
 <!-- Søkeing -->
      <template>
    <div class="searching">
  <input type="text" v-model="search" placeholder="Search..." /> 
    </div> 
  </template> 

  <!-- Checkbox-->
  <template>

    <div class="checkbox-label">
    <h5>Category</h5>
    </div>

    <div class="checkbox">
      <label>Droner</label>
        <input type="checkbox" value="droner" v-model="category"/>
      <label>3D-printer</label>
        <input type="checkbox" value="3d-printer" v-model="category"/>
      </div>
    <!--
  <div class="category">
    <b-form-group label="Category">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        name="flavour-1"
        stacked
      ></b-form-checkbox-group>
    </b-form-group> -->

  
<!--
  <div class="category">
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
  -->
  <!-- <div>Selected: <strong>{{ selected }}</strong></div> -->
  <!-- Availability -->
  
  <!--
   <div class="availability">
    <b-form-group label="Availability">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-3">
        <b-form-checkbox value="available">Available</b-form-checkbox>
        <br />
        <b-form-checkbox value="unavailable">Unavailable</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group> 
  </div>
  -->
 <!-- <div>Selected: <strong>{{ selected }}</strong></div> -->
   <div class="div-availability">
    <div class="availability-label">
    <h5>Availability</h5>
    </div>

<div class="availability">
      <label>Available</label>
        <input type="checkbox" value="available" v-model="availability"/>
      <label>Unavailable</label>
        <input type="checkbox" value="unavailable" v-model="availability"/>
      </div>
</div>
</template>
<!--- --- Group by/sorting -->
<template>
  
  <!--<div>
    <h5 class="group-by">Group by</h5>
    </div> -->
</template>

        <b-row>
            <b-col md="6" class="my-1">
                <b-form-group label-cols-sm="3" class="mb-0" >
                    <b-input-group>
                        <b-form-select class="sorting" v-model="sortBy" :options="sortOptions">
                            <option slot="first" :value="null">-- none --</option>
                        </b-form-select>
                    </b-input-group>
                </b-form-group>
            </b-col>
        </b-row>
        
        <b-table id="Table"
      selectable
      responsive: true
      show-empty
      bordered="md"
      :tabindex="0"
      :items="items"
      :aria-busy="isBusy"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :sort-by.sync="sortBy"
    >
     
   <!-- Busy state med spinner for loading-->
    <div slot="table-busy" class="text-center text-danger my-2">
      <b-spinner class="align-middle"/>
      <strong>Loading items...</strong>
      </div>

      <template class="test-2" slot="name" slot-scope="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template slot="actions" slot-scope="row">
        <b-button size="sm" @click="trekkFra()" class="mr-1">FjernTing </b-button>
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          leggTil
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Comment
        </b-button>
      </template>

      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
    <!-- Side bytte igjennom pagination-->
    <b-row>
      <b-col class="my-1">
        <b-pagination aria-label="Table"
          :total-rows="totalRows"
          :per-page="perPage" label-page
          v-model="currentPage"
          first-text="First" label-first-page
          prev-text="Prev" label-prev-page 
          next-text="Next" label-next-page
          last-text="Last" label-last-page
          class="my-0"
          align= "end"
        />
      </b-col>
    </b-row>
  </b-container>
  </tr>
</template>

<script>
const items = [
    { isActive: true, amount: 40, name: {first:"Hammer"}},
    { isActive: false, amount: 21, name: {first:"Avbiter"}},
    { isActive: false, amount: 89, name: {first:"Skrutrekker" }},
    { isActive: true, amount: 38, name: {first:"RC bil" }},
    { isActive: false, amount: 27, name: {first:"Skruer" }},
    { isActive: true, amount: 40, name: {first:"Drone" }},
]
export default {
    name: "body",
    data() {
      return {

      /*   selected: [], // Must be an array reference!
         options: [
          { text: 'Drone', value: 'drone' },
          { text: '3D-printer', value: '3d-printer' },
          { text: 'Test', value: 'test' }
        ], */
        category: [],
        search: '',
        isBusy: false,
        items: items,
        fields: [
          { key: 'name', label: 'Ting', sortable: true, sortDirection: 'desc' },
          { key: 'amount', label: 'Mengde', sortable: true, class: 'text-center' },
          { key: 'isActive', label: 'Status' },
          { key: 'actions', label: 'Actions' }
        ],
        sortBy: null,
        sortDesc: false,
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    methods: {
      togglebusy() {
        this.isBusy = !this.isBusy
      }
    }
}
</script>

<style lang="sass" scoped>



</style>


