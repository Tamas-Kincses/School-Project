<template>
    <div class="page-section m-3">
        <div class="row">
            <div class="col-lg-4">
                <div class="card card-fluid">
                    <h6 class="card-header"> Your Details </h6>
                    <nav class="nav nav-tabs flex-column">
                        <router-link to="profile" class="nav-link">Profile</router-link>
                        <router-link to="usersettings" class="nav-link">Password</router-link>
                    </nav>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card card-fluid">
                    <h6 class="card-header"> Account </h6>
                    <div class="card-body">
                        <form method="post">
                            <div class="form-group col-lg-4 col-md-4 col-sm-2">
                                <label for="input04">New Password</label>
                                <input type="password" class="form-control" id="input04" value="" >
                            </div>
                            <div class="form-group col-lg-4 col-md-4 col-sm-2">
                                <label for="input04">Confirm New Password</label>
                                <input type="password" class="form-control" id="input04" value="" >
                            </div>
                            <hr>
                            <div class="form-actions col-lg-4 col-md-4 col-sm-2">
                                <input type="password" class="form-control ml-auto mr-3 mb-3" id="input06"
                                    placeholder="Enter Current Password" >
                                <button type="submit" class="btn btn-primary" >Update Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

