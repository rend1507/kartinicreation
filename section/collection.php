<section id="collection">
    <div class="container rounded-4 bg-primary text-white p-5">
        <div class="row row-cols-3 align-items-center g-4 justify-content-center">
            <?php
            for ($i = 1; $i <= 5; $i++) { ?>
                <div class="col">
                    <div class="item">
                        <img src="src/img/product/product-<?= $i ?>.jpg" class="img-responsive" />
                        <div class="caption d-flex flex-column align-items-center justify-content-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?
                        </div>
                    </div>
                </div>
                <?php
            }
            ?>

        </div>
    </div>
</section>