import cv2
import imutils

def image_changer():
    im = input("image.ext: ")
    width = int(input("width: "))
    #height = int(input("height: "))
    image = cv2.imread(im)
    image = imutils.resize(image, width = width, height = 200)
    cv2.imwrite("new_"+im.split(".")[0]+".png", image)
    
image_changer()