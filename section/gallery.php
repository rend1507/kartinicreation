<section id="gallery">
    <div class="container mb-3">
        <div class="row">
            <div class="col-12">
                <h2 class="title-head text-underline">Gallery</h2>

            </div>
        </div>
    </div>
    <!-- Gallery -->
    <div class="container-fluid content">
        <div class="row row-cols-4" data-aos="fade">
            <?php
            $arrayImg = array(
                'beanies' => 4,
                'full' => 4,
                'full-1' => 4,
                'sweater' => 3,

            );

            $previousSeriesOpen = false; // Set flag if current series has 1 item

            foreach ($arrayImg as $series => $length) { ?>
                    <div class="col">

                    <?php
                    for ($i = 1; $i <= $length; $i++) { ?>
                        <a href="src/img/gallery/<?= $series ?>-<?= $i ?>.jpg" data-toggle="lightbox">
                            <img src="src/img/gallery/<?= $series ?>-<?= $i ?>.jpg" class="img-fluid">
                        </a>
                        <?php
                    }
                    ?>
                    </div>

                <?php
            }
            ?>
            <!-- Gallery -->
        </div>
</section>