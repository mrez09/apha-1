<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link rel="icon" type="image/x-icon" href="https://penerbit.lshi.or.id/assets/image/logo/Fav-Apha.ico" />

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        
        <link rel="stylesheet" href={{ asset('fontawesome/css/all.min.css')}} />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.css" />

        <?php 
        //sementara 7 agustus 2025
        //<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        
        ?>
 
        <!-- JS Scripts -->
            <script src="https://cdn.apha.or.id/ckeditor/build/ckeditor.js"></script>
        

        <!--Generate OG -->
        @if(isset($page['props']['event']))
        
    
        <meta
            head-key="description"
            name="description"
            content="{{ (isset($page['props']['event']['description'])) ? $page['props']['event']['description'] : '' }}"
        />
        <meta
            head-key="mobile-web-app-capable"
            name="mobile-web-app-capable"
            content="{{ (isset($page['props']['event']['mobile-web-app-capable'])) ? $page['props']['event']['mobile-web-app-capable'] : '' }}"
        />
        <meta
            head-key="application-name"
            name="application-name"
            content="{{ (isset($page['props']['event']['application-name'])) ? $page['props']['event']['application-name'] : '' }}"
        />
        <meta
            head-key="apple-mobile-web-app-title"
            name="apple-mobile-web-app-title"
            content="{{ (isset($page['props']['event']['apple-mobile-web-app-title'])) ? $page['props']['event']['apple-mobile-web-app-title'] : '' }}"
        />
        <meta
            head-key="theme-color"
            name="theme-color"
            content="{{ (isset($page['props']['event']['theme-color'])) ? $page['props']['event']['theme-color'] : '' }}"
        />
        <!--Sosial Media -->
        <!--Open Graph Protocol -->
        <meta
            head-key="fb:app_id"
            property="fb:app_id"
            content="{{ (isset($page['props']['event']['fb:app_id'])) ? $page['props']['event']['fb:app_id'] : '' }}"
        ></meta>
        <meta 
            head-key="og:site_name"
            property="og:site_name" 
            content="{{ (isset($page['props']['event']['application-name'])) ? $page['props']['event']['application-name'] : '' }}" 
        />
        <meta
            head-key="og:title"
            property="og:title"
            content="{{ (isset($page['props']['event']['title'])) ? ($page['props']['event']['title']) : 'My Website | Page' }}"
        />
        <meta
            head-key="og:description"
            property="og:description"
            content="{{ (isset($page['props']['event'][strip_tags('description')])) ? $page['props']['event'][strip_tags('description')] : '' }}"
        />
        <meta 
            head-key="keywords"
            name="keywords" 
            content="{{ (isset($page['props']['event']['keywords'])) ? $page['props']['event']['keywords'] : '' }}"
        />
        
        <meta
            head-key="og:url"
            property="og:url"
            content="{{ (isset($page['props']['event']['url'])) ? $page['props']['event']['url'] : '' }}"
        />
        <meta
            head-key="og:image"
            property="og:image"
            content="{{  (isset($page['props']['event']['image'])) ? $page['props']['event']['image'] : asset('/img/logo.png') }}"
        />
        <meta
            head-key="og:image:type"
            property="og:image:type"
            content="{{ (isset($page['props']['event']['image_type'])) ? $page['props']['event']['image_type'] : '' }}"
        />
        <meta
            head-key="og:image:alt"
            property="og:image:alt"
            content="{{  (isset($page['props']['event']['image_alt'])) ? $page['props']['event']['image_alt'] : asset('/img/logo.png') }}"
        />
        <meta
            head-key="og:image:width"
            property="og:image:width"
            content="{{ (isset($page['props']['event']['image_width'])) ? $page['props']['event']['image_width'] : '' }}"
        />
        <meta
            head-key="og:image:height"
            property="og:image:height"
            content="{{ (isset($page['props']['event']['image_height'])) ? $page['props']['event']['image_height'] : '' }}"
        />

        <meta 
            head-key="og:type" 
            property="og:type"
            content="{{ (isset($page['props']['event']['og:type'])) ? $page['props']['event']['og:type'] : '' }}"
        />

        @if($page['props']['event']['og:type']=='article')
        <meta 
            head-key="article:published_time" 
            property="article:published_time"
            content="{{ (isset($page['props']['event']['publish_time'])) ? $page['props']['event']['publish_time'] : '' }}"
        />

        <meta 
            head-key="article:tag" 
            property="article:tag"
            content="{{ (isset($page['props']['event']['article_tag'])) ? $page['props']['event']['article_tag'] : '' }}"
        />

        @endif

        @if($page['props']['event']['og:type']=='book')
        <meta 
            head-key="book:author" 
            property="book:author"
            content="{{ (isset($page['props']['event']['author'])) ? $page['props']['event']['author'] : '' }}"
        />
        <meta 
            head-key="book:isbn" 
            property="book:isbn"
            content="{{ (isset($page['props']['event']['isbn'])) ? $page['props']['event']['isbn'] : '' }}"
        />
        <meta 
            head-key="book:release_date" 
            property="book:release_date"
            content="{{ (isset($page['props']['event']['release_date'])) ? $page['props']['event']['release_date'] : '' }}"
        />
        <meta 
            head-key="book:tag" 
            property="book:tag"
            content="{{ (isset($page['props']['event']['tag_book'])) ? $page['props']['event']['tag_book'] : '' }}"
        />

        @endif

        @if($page['props']['event']['og:type']=='profile')<meta 
            head-key="profile:first_name" 
            property="profile:first_name"
            content="{{ (isset($page['props']['event']['firstname'])) ? $page['props']['event']['firstname'] : '' }}"
        />
        <?php 
        /* 
         <meta 
            head-key="profile:last_name" 
            property="profile:last_name"
            content="{{ (isset($page['props']['event']['lastname'])) ? $page['props']['event']['lastname'] : '' }}"
        />

        <meta 
            head-key="profile:gender" 
            property="profile:gender"
            content="{{ (isset($page['props']['event']['gender'])) ? $page['props']['event']['gender'] : '' }}"
        />
          
        */
        ?>      
        @endif

        
        <!--Twitard -->
        <meta
            head-key="twitter:title"
            name="twitter:title"
            content="{{ (isset($page['props']['event']['title'])) ? ($page['props']['event']['title']) : 'My Website | Page' }}"
        />
        <meta
            head-key="twitter:description"
            name="twitter:description"
            content="{{ (isset($page['props']['event']['description'])) ? $page['props']['event']['description'] : '' }}"
        />
        <meta
            head-key="twitter:image"
            name="twitter:image"
            content="{{  (isset($page['props']['event']['image'])) ? $page['props']['event']['image'] : asset('/img/logo.png') }}"
        />
        <meta
            head-key="twitter:card"
            name="twitter:card"
            content="{{ (isset($page['props']['event']['card'])) ? $page['props']['event']['card'] : 'summary' }}"
        />
              
        @endif

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>

    @if(isset($page['props']['ckeditor']))
        <!-- Scripts -->
        
        <script>
        
            
        ClassicEditor
        .create( document.querySelector( '.editor' ), {
            licenseKey: '',
        
        } )
        .then( editor => {
            window.editor = editor;
        
        } )
        .catch( error => {
            //console.error( 'Oops, something went wrong!' );
			//console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
			//console.warn( 'Build id: 3gq7ippbkys6-828crnxk2ph5' );
			//console.error( error );
		} );
	</script>
    @endif

    
    
        
</html>
