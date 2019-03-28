
  
<template>
<tr>
    <b-container fluid>
 <!-- Søkeing -->
      <template>
    <div class="searching">
  <input type="text" v-model="search" placeholder="Searching..." /> 
    </div> 
  </template> 

        <b-row>
            <b-col md="6" class="my-1">
                <b-form-group label-cols-sm="3" label="Sorting" class="mb-0">
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
    <!-- Søkeing -->
    
   

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


