import NewsItem from './NewsItem';
import newsData from '../data/news';

export default function NewsContent() {

    return (
        <div className="flex flex-col gap-4">
            {newsData.map((news, index) => (
                <NewsItem
                    key={index}
                    imageSrc={news.imageSrc}
                    title={news.title}
                    description={news.description}
                    link={news.link}
                    reverse={news.reverse}
                />
            ))}
        </div>
    );
}