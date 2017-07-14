<div id="wrapper-admin-users">
  <div class="container">
    <?php include('inc/sidebar.php'); ?>
    <!--end #sidebar-left-->
    <section id="main">
      <section id="header">
        <ul class="wrap">
          <li class="left">
            <h2>Admin Users</h2>
          </li>
          <li class="right">
            <ul>
              <li class="notification">
                <a href="#"><img src="images/icon-notification" alt="Notification"/><span>10</span></a>
              </li>
              <li class="account">
                <a href="#"><img src="images/author.png" alt="Author"/></a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <!--end #header-->

      <section id="content">
        <div id="filter-search">
          <div class="filter">
            <form>
              <ul>
                <li>
                  Filter
                </li>
                <li>
                  <input type="text" class="form-control" aria-label="...">
                </li>
                <li>
                  <button type="submit" class="button">APPLY</button>
                </li>
              </ul>
            </form>
          </div>

          <div class="search">
              <form>
                <ul>
                  <li>
                    Search
                  </li>
                  <li>
                    <input type="text" class="form-control" placeholder="Name, Location">
                  </li>
                  <li>
                    <button type="submit" class="button">ADD</button>
                  </li>
                </ul>
              </form>
          </div><!--end .search-->
        </div><!--end #filter-->

        <div id="list-content">

        </div>
      </section>
      <!--end #content-->
    </section>
    <!--end #main-->
  </div>
  <!--end .container-->
</div>
<!--end .wrapper-dashboard-->
