// Article data
        const articles = {
            'museum-angkut': {
                title: 'Selamat datang di Museum Angkut Malang: Sebuah Perjalanan Menakjubkan Melalui Sejarah dan Kecanggihan Otomotif',
                meta: 'Ditulis pada Selasa, 04 Juni 2024 | 23:29 by admin',
                image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=400&fit=crop',
                content: `
                    <p>Apakah kamu seorang pecinta mobil? Atau apakah kamu menyukai petualangan yang menarik? Jika iya, maka Museum Angkut Malang adalah tempat yang harus kamu kunjungi. Terletak di kota Malang yang indah, museum ini menawarkan pengalaman unik yang menggabungkan sejarah otomotif dan kecanggihan visual yang memukau.</p>
                    
                    <p>Ketika kamu pertama kali memasuki Museum Angkut, kamu akan langsung terpesona dengan koleksi mobil klasik yang dipamerkan dengan apik. Dari mobil-mobil kuno yang menggambarkan zaman dulu hingga mobil mewah yang menunjukkan prestise dan keanggunan, museum ini memiliki segalanya. Tidak hanya mobil, museum ini juga memiliki sepeda motor, becak, dan kendaraan tradisional lainnya yang memamerkan kekayaan budaya Indonesia.</p>
                    
                    <p>Yang membuat Museum Angkut begitu istimewa adalah perpaduan antara sejarah otomotif dan teknologi modern. Kamu dapat mengikuti tur virtual yang interaktif, di mana kamu akan merasakan sensasi berkendara dengan mobil-mobil legendaris di berbagai tempat di dunia. Dari jalanan sibuk New York hingga pusat kota Roma yang megah, pengalaman ini akan membawamu ke tempat-tempat yang hanya bisa kamu impikan.</p>
                    
                    <p>Selain itu, Museum Angkut juga menawarkan wahana menarik lainnya, seperti "Movie Star Studio" yang memungkinkanmu merasakan menjadi bintang film dalam adegan ikonik. Kamu dapat berpose di depan mobil-mobil terkenal yang digunakan dalam film-film terkenal dunia dan mengabadikan momen-momen berharga tersebut.</p>
                    
                    <p>Tidak hanya tentang otomotif, Museum Angkut juga memiliki zona yang didedikasikan untuk mengenalkan keindahan alam Indonesia. Dalam zona "Ethnic & Tourism", kamu dapat menjelajahi miniatur berbagai tempat wisata terkenal di Indonesia, seperti Borobudur, Bali, dan Raja Ampat. Kamu dapat mengambil foto-foto yang memukau dan merasakan seperti berada di tempat-tempat tersebut.</p>
                    
                    <p>Setelah lelah berkeliling museum, kamu dapat mengunjungi area restoran dan kafe yang menawarkan berbagai makanan lezat. Di sini, kamu dapat bersantai, mengobrol, dan merenungkan pengalaman yang menakjubkan yang telah kamu dapatkan.</p>
                    
                    <p>Museum Angkut Malang adalah tempat yang tidak boleh dilewatkan jika kamu berkunjung ke kota ini. Dengan koleksi yang mengesankan, pengalaman interaktif yang menghibur, dan atmosfer yang ramah, museum ini menawarkan pengalaman rekreasi yang tak terlupakan bagi pengunjungnya. Apakah kamu seorang penggemar otomotif, pecinta sejarah, atau hanya ingin berpetualang dalam dunia yang menakjubkan, Museum Angkut Malang adalah destinasi yang sempurna untukmu.</p>
                `
            },
            'coban-rondo': {
                title: 'Mengunjungi Surga Tersembunyi: Keindahan Air Terjun Coban Rondo',
                meta: 'Ditulis pada Kamis, 06 Juni 2024 | 10:45 by admin',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
                content: `
                    <p>Selamat datang di Coban Rondo, sebuah destinasi alam yang memikat hati dan menggajar Anda untuk menikmati keindahan alam yang menakjubkan. Tersembunyi di dalam hutan yang hijau, air terjun ini adalah salah satu daya tarik utama Malang yang wajib dikunjungi.</p>
                    
                    <p>Coban Rondo terletak di kawasan Pujon, sekitar 20 kilometer dari pusat kota Malang. Perjalanan menuju lokasi ini akan memanjakan mata Anda dengan pemandangan pegunungan yang menawan dan udara sejuk yang menyegarkan.</p>
                    
                    <p>Air terjun setinggi 84 meter ini jatuh dari tebing batu yang curam, menciptakan pemandangan yang spektakuler. Suara gemuruh air yang jatuh berpadu dengan kicauan burung-burung di sekitar hutan menciptakan simfoni alam yang menenangkan jiwa.</p>
                    
                    <p>Selain menikmati keindahan air terjun, pengunjung juga dapat melakukan berbagai aktivitas menarik seperti flying fox, outbound, dan berkemah. Fasilitas yang tersedia cukup lengkap dengan area parkir, warung makan, dan toilet yang bersih.</p>
                    
                    <p>Waktu terbaik untuk mengunjungi Coban Rondo adalah pada pagi hari ketika udara masih segar dan cahaya matahari mulai menerangi air terjun, menciptakan pelangi kecil yang indah di antara percikan air.</p>
                `
            },
            'secret-zoo': {
                title: 'Menemukan Keseruan di Tempat Rekreasi Batu Secret Zoo',
                meta: 'Ditulis pada Sabtu, 04 Juni 2024 | 09:47 by admin',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop',
                content:
function showPage(page, category = null) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    if (page === 'category') {
        document.getElementById('category-page').classList.remove('hidden');
        loadCategory(category);
    } else {
        document.getElementById(`${page}-page`).classList.remove('hidden');
    }
}

function showArticle(id) {
    const article = articles[id];
    if (!article) return;

    const container = document.getElementById("article-content");
    container.innerHTML = `
        <h1 class="article-detail-title">${article.title}</h1>
        <div class="article-detail-meta">${article.meta}</div>
        <img src="${article.image}" class="article-detail-image" alt="${article.title}">
        <div class="article-detail-content">${article.content}</div>
    `;

    showPage('article');
}

function loadCategory(category) {
    const catHeader = document.getElementById("category-header");
    catHeader.innerHTML = `
        <h2 class="category-title">${category.replace('-', ' ').toUpperCase()}</h2>
        <p class="category-description">Artikel seputar kategori ${category.replace('-', ' ')}</p>
    `;

    const catList = document.getElementById("category-articles");
    catList.innerHTML = "";
    for (const key in articles) {
        const a = articles[key];
        if (!a.kategori || a.kategori !== category) continue;
        catList.innerHTML += `
            <article class="article-card">
                <img src="${a.image}" alt="${a.title}" class="article-image">
                <div class="article-content">
                    <div class="article-meta">${a.meta}</div>
                    <h2 class="article-title">${a.title}</h2>
                    <p class="article-excerpt">${a.excerpt}</p>
                    <a href="#" class="read-more" onclick="showArticle('${key}')">Selengkapnya →</a>
                </div>
            </article>
        `;
    }
}
