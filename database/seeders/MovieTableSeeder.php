<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The shawsenk redemption',
                'slug' => 'the-shawsenk-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=D9JaTXsOHdg',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'Thor love and thunder',
                'slug' => 'thor-love-and-thunder',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=Go8nTmfrQd8',
                'thumbnail' => 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/06/28/2877899683.jpeg',
                'rating' => 9.0,
                'is_featured' => 0,
            ],
            [
                'name' => 'Avengers endgame',
                'slug' => 'avengers-endgame',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
                'thumbnail' => 'https://www.layar.id/wp-content/uploads/2019/06/2-poster-avengers-endgame.jpg',
                'rating' => 9.9,
                'is_featured' => 0,
            ]
        ];

        Movie::insert($movies);
    }
}
