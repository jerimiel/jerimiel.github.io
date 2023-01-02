import cv2
import imutils
import os

def image_changer():
    imi_dir = input("path: ")
    imi=os.listdir(imi_dir)
    width = int(input("width: "))
    #height = int(input("height: "))
    for im in imi:
        image = cv2.imread(os.path.join(imi_dir,im))
        image = imutils.resize(image, width = width, height = 200)
        cv2.imwrite(im, image)
    
image_changer()