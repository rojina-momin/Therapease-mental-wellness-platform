from django.shortcuts import render
from rest_framework.decorators import api_view  #check if the api request is POST or GET
from rest_framework.response import Response
import random
import json
import cv2
import numpy as np
from keras.models import model_from_json
import time

# Create your views here.

@api_view(['POST'])
def mental_prediction(request):
    if request.method == 'POST':
        emotion_dict = {0: "Anxiety", 1: "Anxious", 2: "Depress", 3: "Depression", 4: "Stress"}

        # load json and create model
        # json_file = open('C:\\Users\\aalam\\Emotion_detection_with_CNN-main\\Model\\emotion_model.json', 'r')
        json_file = open('C:\\Users\\aalam\\Therapease-mental-wellness-platform-1\\chat_backend\\MentalRecognition\\Model\\emotion_model.json', 'r')
        loaded_model_json = json_file.read()
        json_file.close()
        emotion_model = model_from_json(loaded_model_json)

        # load weights into new model
        # emotion_model.load_weights("C:\\Users\\aalam\\Emotion_detection_with_CNN-main\\Model\\emotion_model.h5")
        emotion_model.load_weights("C:\\Users\\aalam\\Therapease-mental-wellness-platform-1\\chat_backend\\MentalRecognition\\Model\\emotion_model.h5")
        print("Loaded model from disk")

        # start the webcam feed
        cap = cv2.VideoCapture(0)
        start_timer = time.time()
        results = []

        while True:
            # Find haar cascade to draw bounding box around face
            ret, frame = cap.read()
            frame = cv2.resize(frame, (1280, 720))
            if not ret:
                break
            face_detector = cv2.CascadeClassifier('C:\\Users\\aalam\\Therapease-mental-wellness-platform-1\\chat_backend\\MentalRecognition\\Model\\haarcascades\\haarcascade_frontalface_default.xml')
            gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            # detect faces available on camera
            num_faces = face_detector.detectMultiScale(gray_frame, scaleFactor=1.3, minNeighbors=5)

            # take each face avail
            # able on the camera and Preprocess it
            for (x, y, w, h) in num_faces:
                cv2.rectangle(frame, (x, y-50), (x+w, y+h+10), (0, 255, 0), 4)
                roi_gray_frame = gray_frame[y:y + h, x:x + w]
                cropped_img = np.expand_dims(np.expand_dims(cv2.resize(roi_gray_frame, (48, 48)), -1), 0)

                # predict the emotions
                emotion_prediction = emotion_model.predict(cropped_img)
                maxindex = int(np.argmax(emotion_prediction))
                cv2.putText(frame, emotion_dict[maxindex], (x+5, y-20), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)
                print("Emotion:",emotion_dict[maxindex])
                results.append(emotion_dict[maxindex])
            cv2.imshow('Emotion Detection', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
    
            if time.time() - start_timer > 150:
                break

    cap.release()
    cv2.destroyAllWindows()
    d = {}

    for s in results:
        if s not in d:
            d[s] = 1
        else:
            d[s] += 1

    maxv = float('-inf')
    maxk = '' 

    for key,value in d.items():
        if value>maxv:
            maxv = value
            maxk = key
    print(maxk)
    return Response(maxk)
