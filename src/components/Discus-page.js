import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, ThumbDown, Clock, User, MessageSquare, Flag, ThumbsDown } from 'lucide-react';
import { Card, CardContent } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";

const DiscussionPage = () => {
  const [comment, setComment] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);


  // Contoh Modul Komen
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Ahmad Rizky",
      content: "Smart City adalah langkah yang tepat menuju masa depan yang lebih baik. Dengan integrasi teknologi yang tepat, kita bisa membuat kota lebih efisien dan nyaman untuk semua warga.",
      timestamp: "2 hours ago",
      likes: 5,
      dislike: 100,
      replies: 3
    },
    {
      id: 2,
      name: "Putra W",
      content: "Saya setuju dengan konsep Smart City, tapi kita juga harus memastikan semua lapisan masyarakat bisa mengakses teknologinya dengan mudah.",
      timestamp: "5 hours ago",
      likes: 3,
      dislike: 478789448,
      replies: 1
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        name: "Anonymous User",
        content: comment,
        timestamp: "Recently",
        likes: 0,
        dislike: 0,
        replies: 0,
      };
      setComments([newComment, ...comments]);
      setComment('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleLike = (commentId) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const handleDislike = (commentId) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, dislike: comment.dislike + 1 }
        : comment
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-700 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Icon */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <MessageSquare className="w-12 h-12 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-8 relative animate-fade-in">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200'>Discussion</span>
          </h1>
          <p className="text-xl text-indigo-200">
          What do you think the future of Smart City is? Share your views and let's discuss!
          </p>
        </div>

        {/* Discussion Card */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
          <CardContent className="p-6">
            {/* Comment Input */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <User className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="font-medium text-gray-700">Write your opinion</span>
                </div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What do you think about smart city?"
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  required
                />
                <div className="mt-3 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </form>

            {showSuccess && (
              <Alert className="mb-6 bg-green-50 text-green-800 border border-green-200">
                <AlertDescription>
                  Your opinion has been shared successfully!
                </AlertDescription>
              </Alert>
            )}

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div 
                  key={comment.id} 
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors duration-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="bg-indigo-100 p-2 rounded-full mr-3">
                        <User className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{comment.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {comment.timestamp}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{comment.content}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <button
                      onClick={() => handleLike(comment.id)}
                      className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span>{comment.likes}</span>
                    </button>
                    <button
                      onClick={() => handleDislike(comment.id)}
                      className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <ThumbsDown className="w-4 h-4 mr-1" />
                      <span>{comment.dislike}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{comment.replies} Reply</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                      <Flag className="w-4 h-4 mr-1" />
                      <span>Report</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiscussionPage;