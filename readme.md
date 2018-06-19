1. Dữ liệu được tải về từ trang web https://corpus.byu.edu/ . Vì lý do bản quyền nên mình không thể chia sẻ dữ liệu này. Các bạn có thể lên đây để tải về. Hoặc các bạn có thể tải corpus của Wikipedia từ đường dẫn này: https://meta.wikimedia.org/wiki/Data_dump_torrents#English_Wikipedia
2. Sau khi tải được dữ liệu về để training, các bạn cần chuyển dữ liệu về dạng như ở file training_sentence.txt, loại bỏ các dấu câu cũng như các ký hiệu đặc biệt. (Lưu ý: các bạn có thể chuyển dữ liệu về dạng mong muốn theo mục đích training của mình, không bắt buộc theo dạng này).
3. File GoogleNews-vectors-negative300.bin là file word embedding, dữ liệu được embedded từ Google News. Ở đây mình sử dụng gensim trong python để làm việc với file này. Các bạn có thể tải về từ https://github.com/mmihaltz/word2vec-GoogleNews-vectors
4. project2_ui là file giao diện làm app sử dụng trên nền tảng iOS
5. App được code trên nền tảng iOS được chứa trong thư mục SolveEnglish. App chưa hoàn thiện, chỉ mới hoàn thiện phần giao diện và thao tác cơ bản, chỉ có một màn hình, chưa deploy model của tensorflow vào app do chưa có thời gian.
6. Tài liệu liên quan nằm trong thư mục documentation.
7. Các file check_data.js và crawl_data.js là file viết bằng javascript để tải dữ liệu test mẫu về. Các bạn có thể tự tạo dữ liệu test mẫu từ corpus đã tải về. Đáp án của dữ liệu mẫu nằm ở file arr_ans.npy
8. Các file training mẫu nằm ở continuous_bag_of_words.ipynb và recurrent_neural_network.ipynb
9. File xử lý dữ liệu ở file preprocessing_data.ipynb


NOTE: đây chỉ là bản mẫu nghiên cứu trong thời gian ngắn, nếu có gì sai sót mong người đọc thông cảm :D Mọi thắc mắc vui lòng liên hệ tác giả: thanhhau097@gmail.com


