from keras.models import load_model
import numpy as np
import sys
from PIL import Image


def predict(path):

    lesion_type_dict = {
        0: 'Melanocytic nevi',
        1: 'Melanoma',
        2: 'Benign keratosis-like lesions ',
        3: 'Basal cell carcinoma',
        4: 'Actinic keratoses',
        5: 'Vascular lesions',
        6: 'Dermatofibroma'
    }

    model = load_model("./model.h5")
    img = Image.open(path).resize((100, 75))
    img = np.expand_dims(img, 0)/255.0

    output = model.predict(img)
    prob = max(output[0])
    ind = np.where(output[0] == prob)[0][0]

    print(lesion_type_dict[ind])


if __name__ == "__main__":
    predict(sys.argv[1])
