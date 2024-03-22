<!-- Start: Footer Section
=======================-->
	<?php 
	$renoval_copyright 	= get_theme_mod('footer_third_custom','Copyright &copy; [current_year] [site_title] | Powered by [theme_author]');
			if( !empty($renoval_copyright)){ 
	?>
	<div class="copyright footer-bottom wow fadeInDown">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6">
					<div class="copyright">
						<p>
							<?php 	
							$renoval_copyright_allowed_tags = array(
								'[current_year]' => date_i18n('Y'),
								'[site_title]'   => get_bloginfo('name'),
								'[theme_author]' => sprintf(__('<a href="https://www.nayrathemes.com/renoval-free/" target="_blank">Renoval</a>', 'renoval')),
							);
						?>                        
						<div class="copyright-text">
							<?php
								echo apply_filters('renoval_footer_copyright', wp_kses_post(renoval_str_replace_assoc($renoval_copyright_allowed_tags, $renoval_copyright)));
							?>
						</div>
						</p>
					</div>
				</div>
				<div class="col-md-6">
					<div class="right-area-copyright">
						<aside id="monster-widget-placeholder-6" class="widget widget_pages">
							<?php wp_nav_menu( 
								array(  
									'theme_location' => 'footer_menu',
									'container'  => '',
									'menu_class' => 'footer-menu',
									'fallback_cb' => 'WP_Bootstrap_Navwalker::fallback',
									'walker' => new WP_Bootstrap_Navwalker()
									 ) 
								);	
							?>
						</aside>
					</div>
				</div> 
			</div>
		</div>	
	</div>
<?php } ?>
	<!-- End: Footer Section
	=======================-->

 <!-- ScrollUp -->
	<?php 
		$hs_scroller 	= get_theme_mod('hs_scroller','1');	
		if($hs_scroller == '1') :
	?>
		<a href="javascript:void(0)" class="scrollup one"><i class="fa fa-arrow-up"></i></a> 
	<?php endif; ?>

<?php 
wp_footer(); ?>
</body>
</html>