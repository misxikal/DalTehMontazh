<?php
/**
Template Name: News
*/

get_header();
?>

<div class="container mt-4">
    <div class="row">
        <?php
        $args = array(
            'post_type' => 'news',
            'posts_per_page' => -1,
        );

        $news_query = new WP_Query($args);

        if ($news_query->have_posts()) {
            while ($news_query->have_posts()) {
                $news_query->the_post();
                ?>
                <div class="col-md-6 mb-4">
                    <div class='new_item card'>
                        <?php if (has_post_thumbnail()) : ?>
                            <img src="<?php the_post_thumbnail_url('medium'); ?>" class="card-img-top" alt="<?php the_title(); ?>">
                        <?php endif; ?>
                        <div class="card-body">
                            <h2 class="card-title"><?php the_title(); ?></h2>
                            <div class="card-text"><?php the_content(); ?></div>
                            <p class="card-text">Дата публикации: <?php echo get_the_date(); ?></p>
                        </div>
                    </div>
                </div>
                <?php
            }
            wp_reset_postdata();
        } else {
            echo 'Новости не найдены.';
        }
        ?>
    </div>
</div>

<?php
get_footer();
?>
