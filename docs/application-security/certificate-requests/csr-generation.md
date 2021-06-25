# CSR Generation

### Requesting the Certificate to enable HTTPS in Web Application at Flex

The process shown below are for certificate requests done in Windows environments.

##### Create a Certificate Request

From your computer (laptop/desktop) using Windows 10 or above, type certlm.msc in the lookup text box and open it

<img src="./images/CSR_Generation_1.png" alt="CSR_Generation_1" style="zoom:67%;" />



*Note:* It is possible that the your search shows the window below. In this case you should select "Manage computer certificates" option:

<img src="./images/CSR_Generation_2.png" alt="CSR_Generation_2" style="zoom:67%;" />



Right click on Personal/Certificates folder and select "Create Custom Request" option:

<img src="./images/CSR_Generation_3.png" alt="CSR_Generation_3" style="zoom:75%;" />



Click Next:

<img src="./images/CSR_Generation_4.png" alt="CSR_Generation_4" style="zoom:75%;" />



Select Proceed without enrollment policy:

<img src="./images/CSR_Generation_5.png" alt="CSR_Generation_5" style="zoom:75%;" />



Select PKS#10 in Request format:

<img src="./images/CSR_Generation_6.png" alt="CSR_Generation_6" style="zoom:75%;" />



Click in Properties button:

<img src="./images/CSR_Generation_7.png" alt="CSR_Generation_7" style="zoom:75%;" />



Give a friendly name for the certificate:

<img src="./images/CSR_Generation_8.png" alt="CSR_Generation_8" style="zoom:75%;" />



In Subject tab we need to add the common name, in this case the customized DNS for the server:

<img src="./images/CSR_Generation_9.png" alt="CSR_Generation_9" style="zoom:75%;" />



We also need to add the common name as an alternative name due to Chrome does not read the common name:

<img src="./images/CSR_Generation_10.png" alt="CSR_Generation_10" style="zoom:75%;" />



Add other names that the server are assigned, in this case the fully qualified name for the server FQN. It is a good idea to add the server name only to allow same region to specify only server name and will get the certificate.

<img src="./images/CSR_Generation_11.png" alt="CSR_Generation_11" style="zoom:75%;" />

*Note:* The reason to add the common name also in the alternate name is that Chrome does not read the common name anymore.

In Extensions tab, Key usage option, select Digital signature and Key encipherment to add:

<img src="./images/CSR_Generation_12.png" alt="CSR_Generation_12" style="zoom:75%;" />



In Extended Key Usage (application policies) option, select Server Authentication and Client Authentication to add:

<img src="./images/CSR_Generation_13.png" alt="CSR_Generation_13" style="zoom:75%;" />



In Private Key tab, Cryptographic Service Provider option, check "RSA, Microsoft Software Key Storage Provider". In Key Options set to 2048 and make sure you tick "Make private key exportable", so you can move the certificate from your computer/laptop to the server once you get the certificate.

<img src="./images/CSR_Generation_14.png" alt="CSR_Generation_14" style="zoom:75%;" />



In "Select Hash Algorithm" use sha256:

<img src="./images/CSR_Generation_15.png" alt="CSR_Generation_15" style="zoom:75%;" />



In the final window save it as Base 64:

<img src="./images/CSR_Generation_16.png" alt="CSR_Generation_16" style="zoom:75%;" />



The file content will be like below and we will use the content of this file for the SNX request.

<img src="./images/CSR_Generation_17.png" alt="CSR_Generation_17" style="zoom:75%;" />



Once the CSR  file is generated, you will need to open an **[SNC]** (Service Now) request ticket to request the Certificate Generation.
