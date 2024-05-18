### Documentation for Zip File: "colab_streamlit_app.zip"

#### Overview:
This zip file contains two folders: "colab_notebook" and "streamlit_app". The "colab_notebook" folder contains a Jupyter Notebook intended to be run on Google Colab, while the "streamlit_app" folder contains a Streamlit web application.

#### Instructions for Using the Notebook:
1. **Upload to Google Colab**:
   - Upload the notebook file located in the "colab_notebook" folder to your Google Colab environment.

2. **Download Dataset to Google Drive**:
   - download the dataset to your Google Drive.
   - [Dataset_link](https://docs.google.com/spreadsheets/d/1D7pW-i964C8zYVTQdH7m0hsNDu7espezgp47qYoGcNU/edit#gid=0)

3. **Mount Google Drive**:
   - Run the code cell to mount your Google Drive to the Colab environment.
   - This step is necessary for accessing files stored in your Google Drive.

4. **Run Code Cells**:
   - Execute each code cell in the notebook sequentially to load the dataset and perform any necessary data processing or analysis.

#### Instructions for Running the Streamlit App Locally:
1. **Create Conda Environment**:
   - Navigate to the "streamlit_app" folder in the terminal/command prompt.
   - Create a new Conda environment using the provided `environment.yml` file:
     ```
     conda create -n <environment_name>
     ```

2. **Activate Conda Environment**:
   - Activate the newly created Conda environment:
     ```
     conda activate <environment_name>
     ```

3. **Install Requirements**:
   - Install the required Python packages listed in the `requirements.txt` file:
     ```
     pip install -r requirements.txt
     ```

4. **Run Streamlit App**:
   - Use the following command to run the Streamlit web application:
     ```
     streamlit run app.py
     ```
   - This command will start the Streamlit server and launch the app in your default web browser.

#### Notes:
- Ensure that you have appropriate permissions to access and execute files in your Google Drive and local environment.
- Make sure to replace `<environment_name>` with the name of the Conda environment created in step 1.
