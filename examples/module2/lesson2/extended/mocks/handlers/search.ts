import { HttpResponse, StrictResponse, http } from 'msw';

export const searchHandlers = [
  http.get('/w/rest.php/v1/search/title', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');

    if (query?.toLowerCase() !== 'playwright') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return fetch(request) as Promise<StrictResponse<any>>;
    }

    return HttpResponse.json({
      pages: [
        {
          id: 123456,
          key: 'Mocked_key',
          title: 'Mocked title',
          excerpt: 'Playwright',
          matched_title: null,
          description: 'Mocked description',
          thumbnail: {
            mimetype: 'image/jpeg',
            width: 60,
            height: 68,
            duration: null,
            url: '//upload.wikimedia.org/wikipedia/commons/thumb/1/13/Benjamin_Jonson_by_Abraham_van_Blyenberch.jpg/60px-Benjamin_Jonson_by_Abraham_van_Blyenberch.jpg'
          }
        }
      ]
    });
  })
];
