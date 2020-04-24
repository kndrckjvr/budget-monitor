<template>
  <div>
    <div class="col-6 mt-4 mx-auto">
      <div class="card">
        <div class="card-header bg-primary">
          <div class="card-title m-0">
            <h5 class="m-0 text-white">Welcome to Budget Monitor</h5>
          </div>
        </div>
        <div class="card-body">
          <form action="#" method="post" class="w-100">
            <div class="form-row">
              <label for="email" class="font-weight-bold">E-Mail</label>
              <input type="text" name="email" id v-model="email" class="form-control" />
            </div>
            <div class="form-row">
              <label for="password" class="font-weight-bold">Password</label>
              <input type="password" name="password" id v-model="password" class="form-control" />
            </div>
            <div class="form-row mt-3">
              <div class="btn btn-success btn-block">Login</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: () => ({
    email: ""
  })
};
</script>

<style>
</style>