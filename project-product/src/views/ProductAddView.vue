<template>
  <div class="product-add">
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="
            row
            gx-4 gx-lg-5
            row-cols-2 row-cols-md-3 row-cols-xl-2
            justify-content-center
          "
        >
          <div class="col-sm-12">
            <h4 class="mb-3">Add new product</h4>
            <div class="needs-validation" novalidate>
              <div class="row g-2">
                <div v-if="!submitted">
                <div class="col-12">
                  <label for="productName" class="form-label"
                    >Product Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="productName"
                    placeholder=""
                    v-model="product.name"
                    required
                  />
                  <div class="invalid-feedback">Valid name is required.</div>
                </div>
                <div class="col-12">
                  <label for="productPhoto" class="form-label"
                    >Product Photo</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="productPhoto"
                    placeholder=""
                    v-model="product.photo"
                    required
                  />
                  <div class="invalid-feedback">
                    Valid photo path is required.
                  </div>
                </div>
                <div class="col-12">
                  <label for="productPrice" class="form-label">Price</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">CAD</span>
                    <input
                      type="text"
                      class="form-control"
                      id="productPrice"
                      placeholder=""
                      v-model="product.price"
                      required
                    />
                    <div class="invalid-feedback">Price is required.</div>
                  </div>
                </div>
                <div class="col-12">
                  <label for="productDescription" class="form-label"
                    >Product Description</label
                  >
                  <textarea
                    class="form-control"
                    id="productDescription"
                    placeholder=""
                    v-model="product.description"
                  ></textarea>
                  <div class="invalid-feedback">Valid description</div>
                </div>
                <div class="col-12">
                  <label for="productType" class="form-label"
                    >Product Type</label
                  >
                  <select
                    class="form-control"
                    id="productType"
                    placeholder=""
                    v-model="product.type"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Burguer">Burguer</option>
                    <option value="Italian">Italian</option>
                    <option value="Indian">Indian</option>
                    <option value="Thai">Thai</option>
                  </select>
                  <div class="invalid-feedback">
                    Valid photo path is required.
                  </div>
                </div>
                <button class="w-100 btn btn-secondary btn-lg mt-3" type="button" @click="saveProduct">Save </button>
                </div>
                <div v-else>
                  <h4>You submitted successfully!</h4>
                  <button class="w-100 btn btn-success btn-lg mt-3" type="button" @click="newProduct">New product </button>
                </div>
                <hr class="my-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  data () {
    return {
      submitted: false,
      product: {
        id: '',
        name: '',
        photo: '',
        price: '',
        description: '',
        type: ''
      }
    }
  },
  methods: {
    saveProduct () {
      const data = {
        name: this.product.name,
        photo: this.product.photo,
        price: this.product.price,
        description: this.product.description,
        type: this.product.type
      }
      ProductDataService.create(data)
        .then(response => {
          this.product.id = response.data.id
          console.log(response.data)
          this.submitted = true
        })
        .catch(e => {
          console.log(e)
        })
    },

    newProduct () {
      this.submitted = false
      this.product = {}
    }
  }
}
</script>
